import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../store/userSlice";
import type { RootState, AppDispatch } from "../store/store";
import UserCard from "../components/UserCard";

export default function UserList() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (users.length === 0) dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <nav className="navbar">
        <span className="navbar-brand">User Management</span>
        <button className="btn-primary" onClick={() => navigate("/add-user")}>+ Add User</button>
      </nav>
      <div className="page">
        <h1>All Users</h1>
        {loading && <p className="loading">Loading users...</p>}
        {error && <p className="error">{error}</p>}
        <div className="user-grid">
          {users.map((user) => <UserCard key={user.id} user={user} />)}
        </div>
      </div>
    </div>
  );
}