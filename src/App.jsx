import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Home from "./components/Home";
//import Portfolio from "./components/Portfolio";
//import About from "./components/About";
import ContactForm from "./components/ContactForm";
import ComingSoon from "./components/ComingSoon";

function App() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  if (showComingSoon) {
    return <ComingSoon onEnterHome={() => setShowComingSoon(false)} />;
  }

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/o-nama" element={<About />} /> */}
          <Route path="/kontakt" element={<ContactForm />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
