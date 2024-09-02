import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";
import queryClient from "./lib/tanstack-query.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider locale="pt-BR">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NextUIProvider>
    </QueryClientProvider>
  </StrictMode>
);
