import { SetupWorker } from "msw/browser";

declare global {
  interface Window {
    mswWorker: SetupWorker;
  }
}
