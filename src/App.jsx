
import "./App.css";
import NavBar from "./components/NavAndFooter/NavBar";
import BusinessTask from "./components/hompage/business-task/BusinessTask";
import GetStarted from "./components/hompage/business-task/GetStarted";
import Features from "./components/hompage/features-section/Features";
import HereSection from "./components/hompage/hero-section/HeroSection";
import Pricing from "./components/hompage/pricing/Pricing";
import Testimonials from "./components/hompage/testimonies/Testimonials";

function App() {

  return (
    <div>
      <NavBar />
      <HereSection />
      <Features />
      <BusinessTask />
      <GetStarted />
      <Testimonials />
      <Pricing />
    </div>
  );
}

export default App;
