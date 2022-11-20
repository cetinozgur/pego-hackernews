import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment } from "react";
import { StoriesPage, HomePage, NotFoundPage } from "./pages";
import { useAuth0 } from "@auth0/auth0-react";

export const App = () => {
  const { user, isAuthenticated, error } = useAuth0();

  console.log(user, isAuthenticated, error);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  );
};
