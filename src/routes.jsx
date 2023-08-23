import { Repository } from "./pages/Repository";
import { Home } from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";

export const AppRoutes = () => {
  const navigate = useNavigate();
  return (
    <Routes navigate={(to) => navigate(to)}>
      <Route path="/" element={<Home />} />
      <Route path="/repository/:name" element={<Repository />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
