import { appName } from "./constants";
import { handlers } from "./mocks/handlers";

export async function initMSW() {
  // Registers MSW handlers using global MSW instance in production mode
  if (import.meta.env.MODE !== "production") return;

  if (window.mswWorker) {
    await window.mswWorker.use(...handlers);
    console.info(`[MSW] Handlers registered for ${appName}`);
  }
}
