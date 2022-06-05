import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
