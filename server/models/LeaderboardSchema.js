const mongoose = require("mongoose");

const LeaderboardSchema = new mongoose.Schema({
  contest_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contest",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  last_submission_time: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Leaderboard", LeaderboardSchema);
