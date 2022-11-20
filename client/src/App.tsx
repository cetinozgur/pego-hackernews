import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment } from "react";
import { StoriesPage, HomePage } from "./pages";

export const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/stories" element={<StoriesPage />} />
      </Routes>
    </Fragment>
  );
};
