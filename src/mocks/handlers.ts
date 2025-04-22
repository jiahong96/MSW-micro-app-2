import { http, HttpResponse, delay } from "msw";
import insurances from "./data/insurances.json";
import { appName } from "../constants.ts";

export interface Insurance {
  id: number;
  name: string;
  description: string;
}

export const handlers = [
  http.get("/insurances", async () => {
    console.log(`${appName} - Captured a "GET /insurances" request`);

    await delay();

    return HttpResponse.json(insurances);
  }),
  http.get(`/mock/${appName}/insurances`, async () => {
    console.log(`${appName} - Captured a mock "GET /insurances" request`);

    await delay();

    return HttpResponse.json(insurances);
  }),
];
