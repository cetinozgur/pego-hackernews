import { useAuth0 } from "@auth0/auth0-react";
import { PageLoading } from "@/components";
import { AppRoutes } from "@/routes";

export const App = () => {
  const { user, isAuthenticated, error, isLoading } = useAuth0();

  if (isLoading) {
    return <PageLoading desc="Authenticating..." />;
  }

  console.log("Auth Info:", user, isAuthenticated, error);

  return <AppRoutes />;
};
