import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Home from "./components/Home";
//import Portfolio from "./components/Portfolio";
//import About from "./components/About";
import ContactForm from "./components/ContactForm";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import WeddingsGallery from "./components/WeddingsGallery";
import Portfolio from "./components/Portfolio";

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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/weddings" element={<WeddingsGallery />} />
          {/* <Route path="/o-nama" element={<About />} /> */}
          <Route path="/o-nama" element={<AboutUs />} />
          <Route path="/kontakt" element={<ContactForm />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
