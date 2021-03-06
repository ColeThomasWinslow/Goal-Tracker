import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import { FaSignInAlt } from "react-icons/fa";
import Spinner from "../components/Spinner";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const UseDemo = () => {
    setFormData({
      email: "demo@demo.com",
      password: "demo",
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="authPages">
      <h1 className="Title">
        <FaSignInAlt /> Login
      </h1>
      <p> Please Sign in to your account</p>
      <section>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="AuthInput"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your Email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="AuthInput"
              id="password"
              name="password"
              value={password}
              placeholder="Enter a Password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button className="SubmitBtn"> Sign in</button>
          </div>
        </form>
        <div className="DemoBox">
          <button onClick={UseDemo} className="btn">
            {" "}
            Use Demo Account
          </button>
        </div>
      </section>
    </div>
  );
}

export default Login;
