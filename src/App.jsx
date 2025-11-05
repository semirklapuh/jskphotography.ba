import React from "react";
import ComingSoon from "./components/ComingSoon"; // import naše komponente

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <ComingSoon /> {/* ovdje prikazujemo ComingSoon komponentu */}
      </main>
    </div>
  );
}

export default App;
