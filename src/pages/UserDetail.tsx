import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function UserDetail(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) =>
    state.users.users.find((u) => u.id === Number(id))
  );

  if (!user) {
    return (
      <div className="page">
        <p>User not found.</p>
        <button className="btn-primary" onClick={() => navigate("/users")}>Back</button>
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar">
        <span className="navbar-brand">User Management</span>
        <button className="btn-back" onClick={() => navigate("/users")}>← Back</button>
      </nav>
      <div className="page">
        <h1>{user.name}</h1>
        <div className="panel">
          <div className="panel-row"><span>Email</span><span>{user.email}</span></div>
          <div className="panel-row"><span>Street</span><span>{user.address.street}</span></div>
          <div className="panel-row"><span>City</span><span>{user.address.city}</span></div>
        </div>
        <button className="btn-edit" onClick={() => navigate(`/edit-user/${user.id}`)}>Edit User</button>
      </div>
    </div>
  );
}