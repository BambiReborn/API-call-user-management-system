import { useState } from "react";
import type { User } from "../store/userSlice";

interface Props {
  initialData?: User;
  onSubmit: (data: Omit<User, "id">) => void;
}

export default function UserForm({ initialData, onSubmit }: Props) {
  const [name, setName] = useState<string>(initialData?.name ?? "");
  const [email, setEmail] = useState<string>(initialData?.email ?? "");
  const [street, setStreet] = useState<string>(initialData?.address.street ?? "");
  const [city, setCity] = useState<string>(initialData?.address.city ?? "");
  const [error, setError] = useState<string>("");

  const handleSubmit = (): void => {
    if (!name.trim() || !email.trim() || !street.trim() || !city.trim()) {
      setError("All fields are required.");
      return;
    }
    onSubmit({ name, email, address: { street, city } });
  };

  return (
    <div className="form-wrap">
      {error && <p className="error">{error}</p>}
      <div className="field">
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
      </div>
      <div className="field">
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
      </div>
      <div className="field">
        <label>Street</label>
        <input value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Street" />
      </div>
      <div className="field">
        <label>City</label>
        <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
      </div>
      <button className="btn-primary" onClick={handleSubmit}>
        {initialData ? "Update User" : "Add User"}
      </button>
    </div>
  );
}