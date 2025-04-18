import { http, HttpResponse, delay } from "msw";
import insurances from "./data/insurances.json";

export interface Insurance {
  id: number;
  name: string;
  description: string;
}

export const handlers = [
  http.get("/insurances", async () => {
    console.log('Captured a "GET /insurances" request');

    await delay();

    return HttpResponse.json(insurances);
  }),
];
