import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { updateUser } from "../store/userSlice";
import UserForm from "../components/userForm";
import type { JSX } from "react";

export default function EditUser(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
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
        <h1>Edit User</h1>
        <UserForm initialData={user} onSubmit={(data) => {
          dispatch(updateUser({ id: user.id, ...data }));
          navigate("/users");
        }} />
      </div>
    </div>
  );
}