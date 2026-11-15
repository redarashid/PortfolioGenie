import mongoose from "mongoose";

const githubCacheSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    username: { type: String, required: true },
    name: { type: String },
    currentBio: { type: String },
    topLanguages: [
      {
        language: String,
        count: Number,
      },
    ],
    topProjects: [
      {
        name: String,
        description: String,
        url: String,
        stargazerCount: Number,
        primaryLanguage: { name: String },
      },
    ],
    activitySummary: {
      totalCommits: Number,
      totalPRs: Number,
      totalRepos: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("GithubCache", githubCacheSchema);
