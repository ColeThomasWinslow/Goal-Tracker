const asyncHandler = require("express-async-handler");

// Get Goals
// GET /api/goals
// Auth Required
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// Set Goals
// POST /api/goals
// Auth Required
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Add a text field");
  }
  res.status(200).json({ message: "Set Goals" });
});

// Updated Goals
// PUT /api/goals/:id
// Auth Required
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
});

// Delete Goals
// DELETE /api/goals/:id
// Auth Required
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
