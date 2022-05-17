import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth";
import Home from "./pages/Home";
import Login from "./pages/Login";

const PrivateRoute = ({ Component }) => {
  const auth = isAuthenticated();

  return auth ? (
    <Component />
  ) : (
    <Navigate to="/login" state={{ from: "/login" }} />
  );
};

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute Component={Home} />} />
    </Routes>
  </BrowserRouter>
);
