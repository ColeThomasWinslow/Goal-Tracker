import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";
function GoalForm() {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("1");
  const [Success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text, priority }));
    setText("");
    setPriority("1");
    setSuccess(true);
    setTimeout(function () {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="text">Priority</label>
            <select
              name="priority"
              id="priority"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option selected value="1">
                🔴 High Priority
              </option>
              <option value="2">🟢 Medium Priority</option>
              <option value="3">🟡 Low Priority </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="text">Expected Accomplished Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Add Goal
            </button>
          </div>
        </div>
      </form>
      <div className="goal">
        <div className="goalHeader">
          {priority === "1" && <div className="priority">🔴</div>}
          {priority === "2" && <div className="priority">🟢</div>}
          {priority === "3" && <div className="priority">🟡</div>}
          <div className="DateBox">
            <p className="Date">{new Date().toLocaleDateString("en-US")}</p>
          </div>
        </div>
        <p>{text}</p>
      </div>
      {Success && <p>Your Goal Was Saved</p>}
    </section>
  );
}

export default GoalForm;
