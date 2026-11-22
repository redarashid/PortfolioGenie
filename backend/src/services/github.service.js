import axios from "axios";

const handleGitHubError = (error) => {
  if (error.response) {
    const { status, headers, data } = error.response;
    if (status === 401) {
      throw new Error("Invalid or expired GitHub OAuth token.");
    }
    if (status === 403 && headers["x-ratelimit-remaining"] === "0") {
      throw new Error(
        "GitHub API rate limit exceeded. Please try again later."
      );
    }
    throw new Error(data?.message || `GitHub API error (${status})`);
  }
  throw new Error("Network error while connecting to GitHub.");
};

// 1. جلب الـ Repos من REST API
export const getUserRepos = async (githubToken) => {
  try {
    const response = await axios.get("https://api.github.com/user/repos", {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
      },
      params: {
        sort: "updated",
        per_page: 50,
        type: "owner",
      },
    });
    return response.data;
  } catch (error) {
    handleGitHubError(error);
  }
};

// 2. جلب الـ Pinned Repos + نشاط الـ Commits عبر GraphQL API
export const getGraphQLData = async (githubToken) => {
  const query = `
    query {
      viewer {
        login
        name
        bio
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              primaryLanguage {
                name
              }
            }
          }
        }
        contributionsCollection {
          totalCommitContributions
          totalPullRequestContributions
          restrictedContributionsCount
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      "https://api.github.com/graphql",
      { query },
      {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      }
    );

    if (response.data.errors) {
      throw new Error(response.data.errors[0].message);
    }

    return response.data.data.viewer;
  } catch (error) {
    handleGitHubError(error);
  }
};

// 3. خدمة تحليل بيانات GitHub
export const analyzeGitHubProfile = async (githubToken) => {
  const [repos, graphData] = await Promise.all([
    getUserRepos(githubToken),
    getGraphQLData(githubToken),
  ]);

  const languageCounts = {};
  repos.forEach((repo) => {
    if (repo.language) {
      languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
    }
  });

  const topLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([language, count]) => ({ language, count }));

  let topProjects = graphData.pinnedItems.nodes;
  if (!topProjects || topProjects.length === 0) {
    topProjects = repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 4)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stargazerCount: repo.stargazers_count,
        primaryLanguage: { name: repo.language },
      }));
  }

  const activitySummary = {
    totalCommits: graphData.contributionsCollection.totalCommitContributions,
    totalPRs: graphData.contributionsCollection.totalPullRequestContributions,
    totalRepos: repos.length,
  };

  return {
    username: graphData.login,
    name: graphData.name,
    currentBio: graphData.bio,
    topLanguages,
    topProjects,
    activitySummary,
  };
};
