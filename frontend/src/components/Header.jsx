import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { GiArrowScope } from "react-icons/gi";
import { HiOutlineDocumentAdd, HiOutlineDocumentReport } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };
  return (
    <header className="header">
      <div className="logo">
        <GiArrowScope /> Goal Setter
      </div>
      <div className="NavBox">
        {user ? (
          <>
            <Link className="NavLink" to="/New">
              <p> Set New Goal</p> <HiOutlineDocumentAdd />
            </Link>
            <Link className="NavLink" to="/">
              <p> Your Goals </p> <HiOutlineDocumentReport />
            </Link>
            <button onClick={onLogout} className="btn LogoutBtn">
              <FaSignOutAlt /> logout
            </button>
          </>
        ) : (
          <>
            <Link className="NavLink" to="/login">
              <FaSignInAlt /> login
            </Link>

            <Link className="NavLink" to="/register">
              <FaUser /> Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
