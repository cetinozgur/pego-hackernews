import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, ExitPage } from "@/pages";
import { Fragment } from "react";

export const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/exit" element={<ExitPage />} />
      </Routes>
    </Fragment>
  );
};
