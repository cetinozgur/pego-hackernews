import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { NotFoundPage, HomePage, StoriesPage } from "@/pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/stories" element={<ProtectedRoute component={StoriesPage} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
