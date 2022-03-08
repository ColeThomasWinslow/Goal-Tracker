import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import { FaUser } from "react-icons/fa";
import Spinner from "../components/Spinner";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

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

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="authPages">
      <h1 className="Title">
        <FaUser /> Register
      </h1>
      <p> please create an account</p>
      <section>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="AuthInput"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your Name Here"
              onChange={onChange}
            />
          </div>
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
            <input
              type="password"
              className="AuthInput"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm Password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button className="SubmitBtn"> Create Account</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
