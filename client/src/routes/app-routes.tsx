import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import {
  NotFoundPage,
  HomePage,
  UserFavoritesPage,
  TopStoriesPage,
  BestStoriesPage,
  NewStoriesPage,
} from "@/pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/stories/top" element={<ProtectedRoute component={TopStoriesPage} />} />
      <Route path="/stories/best" element={<ProtectedRoute component={BestStoriesPage} />} />
      <Route path="/stories/new" element={<ProtectedRoute component={NewStoriesPage} />} />
      <Route path="/favorites" element={<ProtectedRoute component={UserFavoritesPage} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
