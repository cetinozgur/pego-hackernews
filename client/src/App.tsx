import { useAuth0 } from "@auth0/auth0-react";
import { PageLoading } from "@/components";
import { AppRoutes } from "@/routes";

import { CustomProvider } from "rsuite";
import { useAppSelector } from "./redux/hooks";

export const App = () => {
  const { user, isAuthenticated, error, isLoading } = useAuth0();
  const theme = useAppSelector((state) => state.theme.value);

  if (isLoading) {
    return <PageLoading />;
  }

  console.log("Auth Info:", user, isAuthenticated, error);

  return (
    <CustomProvider theme={theme}>
      <AppRoutes />
    </CustomProvider>
  );
};
