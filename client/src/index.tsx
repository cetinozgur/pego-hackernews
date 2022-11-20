import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  REACT_APP_AUTH0_DOMAIN,
  REACT_APP_AUTH0_CLIENT_ID,
  REACT_APP_AUTH0_CALLBACK_URL,
} from "./constants";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Auth0Provider
          domain={REACT_APP_AUTH0_DOMAIN}
          clientId={REACT_APP_AUTH0_CLIENT_ID}
          redirectUri={REACT_APP_AUTH0_CALLBACK_URL}
        >
          <App />
        </Auth0Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
