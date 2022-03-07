import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { DayCalc } from "../utils/DayCalc";
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
      <div>
        <p>{goal.endDate && "End Date: " + goal.endDate}</p>
        <p>
          {goal.endDate &&
            DayCalc(
              new Date(new Date(goal.createdAt).toLocaleDateString("en-US")),
              new Date(new Date(goal.endDate).toLocaleDateString("en-US"))
            ) + " Days Left"}
        </p>
      </div>
    </div>
  );
}

export default GoalItem;
