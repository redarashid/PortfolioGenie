// 3. توليد الـ AI Bio
export const generateBioController = async (req, res) => {
  try {
    const { analysis, tone = "professional" } = req.body;

    if (!analysis) {
      return res
        .status(400)
        .json({ error: "GitHub analysis data is required." });
    }

    const languages =
      analysis.topLanguages?.map((l) => l.language).join(", ") ||
      "web technologies";
    const projectsCount = analysis.activitySummary?.totalRepos || 0;
    const name = analysis.name || analysis.username || "Developer";

    // Fallback/Draft bio generator until Shared AI Service is connected
    const bioTemplates = {
      professional: `${name} is a software developer specializing in ${languages}, with ${projectsCount} repositories and a strong focus on building scalable applications.`,
      friendly: `Hi! I'm ${name}, a developer who loves working with ${languages} and building cool projects (${projectsCount} repos and counting!).`,
      concise: `Software Developer | ${languages} | ${projectsCount}+ GitHub Repositories.`,
    };

    const generatedBio = bioTemplates[tone] || bioTemplates.professional;

    res.status(200).json({
      success: true,
      tone,
      bio: generatedBio,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
