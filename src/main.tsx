import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { localDevWorker } from "./msw.ts";

async function enableMocking() {
  if (import.meta.env.MODE != "development") return;

  if (!localDevWorker()) return;

  return localDevWorker().start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
