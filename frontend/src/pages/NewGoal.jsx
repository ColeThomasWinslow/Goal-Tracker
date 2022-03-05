import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoalForm from "../components/GoalForm";
import { useSelector } from "react-redux";
function NewGoal() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <GoalForm />
    </div>
  );
}

export default NewGoal;
