import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
function GoalItem({ goal }) {
  const dispatch = useDispatch();
  return (
    <div className="goal">
      <div className="goalHeader">
        {goal.priority === "1" && <div className="priority">🔴</div>}
        {goal.priority === "2" && <div className="priority">🟢</div>}
        {goal.priority === "3" && <div className="priority">🟡</div>}
        <div className="DateBox">
          <p className="Date">
            {new Date(goal.createdAt).toLocaleDateString("en-US")}
          </p>
        </div>
        <button
          className="close"
          onClick={() => dispatch(deleteGoal(goal._id))}
        >
          X
        </button>
      </div>
      <p>{goal.text}</p>
    </div>
  );
}

export default GoalItem;
