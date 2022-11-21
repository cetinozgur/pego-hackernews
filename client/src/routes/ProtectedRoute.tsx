import { withAuthenticationRequired } from "@auth0/auth0-react";
import { PageLoading } from "../components/PageLoading";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProtectedRoute = ({ component }: any) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <PageLoading />,
  });
  return <Component />;
};
