import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";

function GoalForm() {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("1");
  const [useDate, setUseDate] = useState(false);
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

  return (
    <section className="form">
      <div className="heading">
        <h4 className="Title">
          Create A New Goal <HiOutlineDocumentAdd />
        </h4>
      </div>
      <div className="FormCont">
        <form onSubmit={onSubmit} className="NewGoalForm">
          <div className="FormInfo">
            <label htmlFor="text">Goal :</label>
            <input
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="FormInfo">
            <label htmlFor="text">Priority :</label>
            <select
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
          <div className="DisableInfo">
            <label htmlFor="text">Enable End Date </label>{" "}
            <input type="checkbox" onChange={(e) => setUseDate(!useDate)} />
          </div>
          {useDate && (
            <div className="FormInfo">
              <label htmlFor="text">End Goal By :</label>
              <input
                name="date"
                id="date"
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          )}

          <div className="BtnBox">
            <button type="submit" className=" btn bigBtn">
              <AiFillPlusCircle /> Add Goal
            </button>
          </div>
        </form>
      </div>
      <div className="Container Success">
        {Success && <p>Your Goal Was Saved</p>}
      </div>
    </section>
  );
}

export default GoalForm;
