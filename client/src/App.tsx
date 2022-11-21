import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment } from "react";
import { StoriesPage, HomePage, NotFoundPage } from "@/pages";
import { PageLoading } from "@/components/PageLoading";
import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const App = () => {
  const { user, isAuthenticated, error, isLoading } = useAuth0();

  if (isLoading) {
    return <PageLoading />;
  }

  console.log("Auth Info:", user, isAuthenticated, error);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/stories" element={<ProtectedRoute component={StoriesPage} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  );
};
