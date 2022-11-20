import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { Auth0ProviderWithHistory } from "./Auth0ProviderWithHistory";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Auth0ProviderWithHistory>
          {/* <Auth0Provider
          domain="dev-3ke2nu4o6dtdifah.us.auth0.com"
          clientId="UyjP3UG9C37Zl1CvZxRa8lBOp5Ijvy0j"
          redirectUri={window.location.origin + "/stories"}
        > */}
          <App />
        </Auth0ProviderWithHistory>
        {/* </Auth0Provider> */}
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
