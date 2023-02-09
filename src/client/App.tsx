import React, { useEffect } from "react";
import { SubDomainRoutes, MainRoute } from "routers/index";
import Plausible from "plausible-tracker";

function App() {
  useEffect(() => {
    const { enableAutoPageviews } = Plausible({
      domain: window.location.hostname,
      trackLocalhost: true,
    });

    enableAutoPageviews();
  }, []);

  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <SubDomainRoutes />
    </div>
  );
}

export default App;
