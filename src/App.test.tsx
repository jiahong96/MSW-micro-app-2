import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import insuranceData from "./mocks/data/insurances.json";

describe("App.tsx", () => {
  test("renders the app", () => {
    render(<App />);
    expect(screen.getByText("Hybridapp A")).toBeInTheDocument();
  });

  test("renders insurance cards with title and description", async () => {
    render(<App />);

    for (const insurance of insuranceData) {
      console.log(insurance);
      const { name, description } = insurance;

      await waitFor(() => {
        expect(screen.getByText(name)).toBeInTheDocument();
        expect(screen.getByText(description)).toBeInTheDocument();
      });
    }
  });
});
