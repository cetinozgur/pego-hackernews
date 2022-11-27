import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CALLBACK_URL, AUTH0_AUDIENCE } from "./config";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { store } from "@/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import "@/style/custom-theme.less";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Auth0Provider
          domain={AUTH0_DOMAIN}
          clientId={AUTH0_CLIENT_ID}
          redirectUri={AUTH0_CALLBACK_URL}
          audience={AUTH0_AUDIENCE}
        >
          <ReduxProvider store={store}>
            <App />
          </ReduxProvider>
        </Auth0Provider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
