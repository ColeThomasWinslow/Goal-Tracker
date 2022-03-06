import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";
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
  const clearData = () => {
    setText("");
    setPriority("1");
    setSuccess(false);
  };
  return (
    <section className="form">
      <div className="heading">
        <div className="Head">
          <h4>Create A New Goal</h4>
          <HiOutlineDocumentAdd style={{ width: "80px", height: "50px" }} />
        </div>
      </div>
      <form onSubmit={onSubmit} className="Form">
        <div className="form-section">
          <div className="form-group GoalGroup">
            <label htmlFor="text">Goal</label>
            <input
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-group prioritySelect">
            <label htmlFor="text">Priority</label>
            <select
              className="prioritySelect"
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
        </div>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="text">Expected Accomplished Date</label>
            <input type="date" />
          </div>
          <button type="submit" className="btn ">
            <AiFillPlusCircle /> Add Goal
          </button>
        </div>
      </form>

      <div className="goal goalPrev">
        <div className="goalHeader">
          {priority === "1" && <div className="priority">🔴</div>}
          {priority === "2" && <div className="priority">🟢</div>}
          {priority === "3" && <div className="priority">🟡</div>}
          <div className="DateBox">
            <p className="Date">{new Date().toLocaleDateString("en-US")}</p>
          </div>
          <button className="close prev" onClick={clearData}>
            reset
          </button>
        </div>
        <p>{text}</p>
      </div>
      {Success && <p>Your Goal Was Saved</p>}
    </section>
  );
}

export default GoalForm;
