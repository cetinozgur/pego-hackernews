import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CALLBACK_URL, AUTH0_AUDIENCE } from "./config";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { CustomProvider } from "rsuite";
import "@/style/custom-theme.less";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CustomProvider theme="dark">
        <BrowserRouter>
          <Auth0Provider
            domain={AUTH0_DOMAIN}
            clientId={AUTH0_CLIENT_ID}
            redirectUri={AUTH0_CALLBACK_URL}
            audience={AUTH0_AUDIENCE}
          >
            <App />
          </Auth0Provider>
        </BrowserRouter>
      </CustomProvider>
    </ApolloProvider>
  </React.StrictMode>
);
