import React from "react";
import NavBar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import CardSection from "./CardSection";
import FooterSection from "./FooterSection";
import "./index.css";
const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <CardSection />
      <FooterSection />
    </div>
  );
};

export default App;
