import { Routes, Route } from "react-router-dom";
// import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    {/* <Route path="/login" element={<Login/>} */}
  </Routes>
);
