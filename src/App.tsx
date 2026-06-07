import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

export default function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}