import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../store/userSlice";
import type { AppDispatch } from "../store/store";
import UserForm from "../components/userForm";
import React from "react";

export default function AddUser(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <span className="navbar-brand">User Management</span>
        <button className="btn-back" onClick={() => navigate("/users")}>← Back</button>
      </nav>
      <div className="page">
        <h1>Add New User</h1>
        <UserForm onSubmit={(data) => {
          dispatch(addUser(data));
          navigate("/users");
        }} />
      </div>
    </div>
  );
}