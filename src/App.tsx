import { useEffect, useState } from "react";
import "./App.css";
import { Insurance } from "./mocks/handlers.ts";

// Registers MSW handlers using global MSW instance in production mode
if (import.meta.env.MODE === "production") {
  import("./msw.ts");
}

function App() {
  const [insurances, setInsurances] = useState<Insurance[]>([]);

  useEffect(() => {
    async function getInsuranceData() {
      const url = "/insurances";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setInsurances(json);
      } catch (error: unknown) {
        if (error instanceof Error) console.error(error.message);
      }
    }

    getInsuranceData();
  }, []);

  return (
    <div>
      <h2>Hybridapp A</h2>
      <div className="container">
        {insurances.map((insurance) => (
          <div key={insurance.id} className="card">
            <h3>{insurance.name}</h3>
            <p>{insurance.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
