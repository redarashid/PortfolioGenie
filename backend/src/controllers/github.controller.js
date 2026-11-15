import {
  analyzeGitHubProfile,
  getUserRepos,
} from "../services/github.service.js";
import GithubCache from "../models/githubCache.model.js";

// 1. جلب Repos المستخدم مباشرة من GitHub
export const getReposController = async (req, res) => {
  try {
    const token =
      req.headers.authorization?.split(" ")[1] || process.env.GITHUB_TEST_TOKEN;
    if (!token) {
      return res.status(401).json({ error: "GitHub token is missing" });
    }
    const repos = await getUserRepos(token);
    res.json(repos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 2. تحليل البروفايل وحفظه/تحديثه في MongoDB Cache
export const getAnalysisController = async (req, res) => {
  try {
    const token =
      req.headers.authorization?.split(" ")[1] || process.env.GITHUB_TEST_TOKEN;
    if (!token) {
      return res.status(401).json({ error: "GitHub token is missing" });
    }

    // سحب البيانات وتحليلها من جيت هب
    const analysisData = await analyzeGitHubProfile(token);

    // معرف مؤقت للاختبار لحين اكتمال نظام الـ Auth الكامل
    const testUserId = "65d1234567890abcdef12345";

    // حفظ أو تحديث البيانات في قاعدة البيانات (Upsert)
    const cachedProfile = await GithubCache.findOneAndUpdate(
      { username: analysisData.username },
      {
        userId: testUserId,
        username: analysisData.username,
        name: analysisData.name,
        currentBio: analysisData.currentBio,
        topLanguages: analysisData.topLanguages,
        topProjects: analysisData.topProjects,
        activitySummary: analysisData.activitySummary,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.json({
      message: "GitHub analysis fetched and cached successfully!",
      data: cachedProfile,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 3. توليد الـ AI Bio (مبدئياً لحد ما نكمل وظيفتها)
export const generateBioController = async (req, res) => {
  try {
    res.json({ message: "AI Bio generation endpoint is working!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
