import { GlobalStyles } from "@/styles/global";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "@/features/Home";
import { Fragment } from "react";

export const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Fragment>
  );
};
