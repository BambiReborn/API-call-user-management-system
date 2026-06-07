import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../store/userSlice";
import type { AppDispatch } from "../store/store";
import type { User } from "../store/userSlice";

interface Props {
  user: User;
}

export default function UserCard({ user }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-body">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.address.street}, {user.address.city}</p>
      </div>
      <div className="card-actions">
        <button className="btn-view" onClick={() => navigate(`/users/${user.id}`)}>View</button>
        <button className="btn-edit" onClick={() => navigate(`/edit-user/${user.id}`)}>Edit</button>
        <button className="btn-delete" onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
      </div>
    </div>
  );
}