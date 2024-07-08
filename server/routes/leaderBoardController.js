const Leaderboard = require("../models/LeaderboardSchema");

// Get all leaderboard entries
exports.getAllLeaderboardEntries = async (req, res) => {
  try {
    const leaderboardEntries = await Leaderboard.find().populate(
      "contest_id user_id"
    );
    res.status(200).json(leaderboardEntries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single leaderboard entry by ID
exports.getLeaderboardEntryById = async (req, res) => {
  try {
    const leaderboardEntry = await Leaderboard.findById(req.params.id).populate(
      "contest_id user_id"
    );
    if (!leaderboardEntry) {
      return res.status(404).json({ message: "Leaderboard entry not found" });
    }
    res.status(200).json(leaderboardEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new leaderboard entry
exports.createLeaderboardEntry = async (req, res) => {
  const { contest_id, user_id, score, last_submission_time } = req.body;

  const newLeaderboardEntry = new Leaderboard({
    contest_id,
    user_id,
    score,
    last_submission_time,
  });

  try {
    const savedLeaderboardEntry = await newLeaderboardEntry.save();
    res.status(201).json(savedLeaderboardEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing leaderboard entry
exports.updateLeaderboardEntry = async (req, res) => {
  const { contest_id, user_id, score, last_submission_time } = req.body;

  try {
    const updatedLeaderboardEntry = await Leaderboard.findByIdAndUpdate(
      req.params.id,
      {
        contest_id,
        user_id,
        score,
        last_submission_time,
      },
      { new: true }
    );

    if (!updatedLeaderboardEntry) {
      return res.status(404).json({ message: "Leaderboard entry not found" });
    }

    res.status(200).json(updatedLeaderboardEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a leaderboard entry
exports.deleteLeaderboardEntry = async (req, res) => {
  try {
    const deletedLeaderboardEntry = await Leaderboard.findByIdAndDelete(
      req.params.id
    );

    if (!deletedLeaderboardEntry) {
      return res.status(404).json({ message: "Leaderboard entry not found" });
    }

    res.status(200).json({ message: "Leaderboard entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
