import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import GoalItem from "../components/GoalItem";
import { reset, getGoals } from "../features/goals/goalSlice";
function Dashboard() {
  const [Filter, setFilter] = useState("All");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }
    dispatch(getGoals());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="Content">
      <div>
        <section className="heading">
          <h4 className="Title">
            {user && user.name} Goals <HiOutlineDocumentReport />
          </h4>
          <div className="FilterSelect ">
            <label htmlFor="text">Priority: </label>
            <select
              className="prioritySelect"
              name="priority"
              id="priority"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option defaultValue={"All"} value="All">
                ⚪️ All Goals
              </option>
              <option defaultValue={"1"} value="1">
                🔴 High Priority
              </option>
              <option value="2">🟢 Medium Priority</option>
              <option value="3">🟡 Low Priority </option>
            </select>
          </div>
        </section>
        <div className="Container">
          {goals.length > 0 ? (
            <div className="GoalCont">
              {Filter &&
                goals
                  .filter((item) => item.priority === Filter)
                  .map((goal) => <GoalItem key={goal._id} goal={goal} />)}
              {Filter === "All" &&
                goals.map((goal) => <GoalItem key={goal._id} goal={goal} />)}
            </div>
          ) : (
            <h4>You Dont Have any goals Saved</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
