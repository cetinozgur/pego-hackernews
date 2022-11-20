import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0ProviderWithHistory } from "./Auth0ProviderWithHistory";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
