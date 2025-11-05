import { useState } from "react";
import Home from "./components/Home";
import ComingSoon from "./components/ComingSoon";

function App() {
  // State to show/hide coming soon page
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      {showComingSoon ? (
        <ComingSoon onEnterHome={() => setShowComingSoon(false)} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
