import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { NotFoundPage, HomePage, ProfilePage } from "@/pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<ProtectedRoute component={ProfilePage} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
