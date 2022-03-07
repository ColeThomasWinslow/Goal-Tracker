import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";
import { DayCalc } from "../utils/DayCalc";
function GoalForm() {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("1");
  const [useDate, setUseDate] = useState(true);
  const [EndDate, setEndDate] = useState("");
  const [Success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const endDate = new Date(EndDate).toLocaleDateString("en-US");
    if (useDate) {
      dispatch(createGoal({ text, priority, endDate }));
    } else {
      dispatch(createGoal({ text, priority }));
    }

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
              <option defaultValue={"1"} value="1">
                🔴 High Priority
              </option>
              <option value="2">🟢 Medium Priority</option>
              <option value="3">🟡 Low Priority </option>
            </select>
          </div>
        </div>
        <div className="form-section">
          {useDate && (
            <div className="form-group">
              <label htmlFor="text">Expected Accomplished Date</label>
              <input
                name="date"
                id="date"
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          )}
          <label htmlFor="text">Disable End Date</label>
          <input type="checkbox" onChange={(e) => setUseDate(!useDate)} />
        </div>
        <button type="submit" className="btn btn-block ">
          <AiFillPlusCircle /> Add Goal
        </button>
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
        {useDate && (
          <div>
            {EndDate === "" ? (
              <p>Choose a End Date</p>
            ) : (
              <div>
                <p>
                  {"End Date: " + new Date(EndDate).toLocaleDateString("en-US")}
                </p>
                <p>
                  {DayCalc(
                    new Date(new Date().toLocaleDateString("en-US")),
                    new Date(new Date(EndDate).toLocaleDateString("en-US"))
                  ) + " Days Left"}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {Success && <p>Your Goal Was Saved</p>}
    </section>
  );
}

export default GoalForm;
