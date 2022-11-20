import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  REACT_APP_AUTH0_DOMAIN,
  REACT_APP_AUTH0_CLIENT_ID,
  REACT_APP_AUTH0_CALLBACK_URL,
} from "./constants";

export const Auth0ProviderWithHistory = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(REACT_APP_AUTH0_DOMAIN && REACT_APP_AUTH0_CLIENT_ID)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={REACT_APP_AUTH0_DOMAIN}
      clientId={REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={REACT_APP_AUTH0_CALLBACK_URL}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
