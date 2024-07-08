const Contest = require("../models/ContestSchema");

// Get all contests
exports.getAllContests = async (req, res) => {
  try {
    const contests = await Contest.find().populate("problems participants");
    res.status(200).json(contests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single contest by ID
exports.getContestById = async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.id).populate(
      "problems participants"
    );
    if (!contest) {
      return res.status(404).json({ message: "Contest not found" });
    }
    res.status(200).json(contest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new contest
exports.createContest = async (req, res) => {
  const { name, description, start_time, end_time, problems, participants } =
    req.body;

  const newContest = new Contest({
    name,
    description,
    start_time,
    end_time,
    problems,
    participants,
  });

  try {
    const savedContest = await newContest.save();
    res.status(201).json(savedContest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing contest
exports.updateContest = async (req, res) => {
  const { name, description, start_time, end_time, problems, participants } =
    req.body;

  try {
    const updatedContest = await Contest.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        start_time,
        end_time,
        problems,
        participants,
        updated_at: Date.now(),
      },
      { new: true }
    );

    if (!updatedContest) {
      return res.status(404).json({ message: "Contest not found" });
    }

    res.status(200).json(updatedContest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a contest
exports.deleteContest = async (req, res) => {
  try {
    const deletedContest = await Contest.findByIdAndDelete(req.params.id);

    if (!deletedContest) {
      return res.status(404).json({ message: "Contest not found" });
    }

    res.status(200).json({ message: "Contest deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
