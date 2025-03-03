import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import { JSX } from "react";

function PrivateRoute({ element }: { element: JSX.Element }) {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  return isAuthenticated ? element : <Navigate to="/" />;
}

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
