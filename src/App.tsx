import { useEffect, useState } from "react";
import "./App.css";
import { Insurance } from "./mocks/handlers.ts";
import { appName } from "./constants.ts";
import { initMSW } from "./msw.ts";

function App() {
  const [insurances, setInsurances] = useState<Insurance[]>([]);

  useEffect(() => {
    async function getInsuranceData() {
      const url = "/insurances";
      try {
        const response = await fetch(url, {
          headers: {
            "x-top-appname": appName,
          },
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setInsurances(json);
      } catch (error: unknown) {
        if (error instanceof Error) console.error(error.message);
      }
    }

    initMSW().then(() => {
      getInsuranceData();
    });
  }, []);

  return (
    <div className="app-container">
      <h2>Hybridapp B</h2>
      <div className="list-container">
        {insurances.map((insurance) => (
          <div key={insurance.id} className="card-b">
            <h3>{insurance.name}</h3>
            <p className="card-description">{insurance.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
