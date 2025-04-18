import { handlers } from "./mocks/handlers";
import { setupWorker } from "msw/browser";

if (window.mswWorker) window.mswWorker.use(...handlers);

export const localDevWorker = setupWorker(...handlers);
