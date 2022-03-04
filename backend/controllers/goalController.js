// Get Goals
// GET /api/goals
// Auth Required
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

// Set Goals
// GET /api/goals
// Auth Required
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set Goals" });
};

// Updated Goals
// PUT /api/goals/:id
// Auth Required
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
};

// Delete Goals
// DELETE /api/goals/:id
// Auth Required
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
