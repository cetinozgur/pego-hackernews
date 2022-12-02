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
import { ShowStoriesPage } from "@/pages/show-stories-page";
import { JobStoriesPage } from "@/pages/job-stories-page";
import { AskStoriesPage } from "@/pages/ask-stories-page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/stories/top" element={<ProtectedRoute component={TopStoriesPage} />} />
      <Route path="/stories/best" element={<ProtectedRoute component={BestStoriesPage} />} />
      <Route path="/stories/new" element={<ProtectedRoute component={NewStoriesPage} />} />
      <Route path="/stories/show" element={<ProtectedRoute component={ShowStoriesPage} />} />
      <Route path="/stories/job" element={<ProtectedRoute component={JobStoriesPage} />} />
      <Route path="/stories/ask" element={<ProtectedRoute component={AskStoriesPage} />} />
      <Route path="/favorites" element={<ProtectedRoute component={UserFavoritesPage} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
