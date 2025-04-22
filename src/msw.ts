import { appName } from "./constants";
import { handlers } from "./mocks/handlers";
import { setupWorker } from "msw/browser";

export async function initMSW() {
  if (window.mswWorker) {
    await window.mswWorker.use(...handlers);
    console.info(`[MSW] Handlers registered for ${appName}`);
  }
}

export const localDevWorker = () => {
  return setupWorker(...handlers);
};
