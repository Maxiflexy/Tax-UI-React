
import "./App.css";
import Footer from "./components/NavAndFooter/Footer";
import NavBar from "./components/NavAndFooter/NavBar";
import BusinessTask from "./components/hompage/business-task/BusinessTask";
import GetStarted from "./components/hompage/business-task/GetStarted";
import FaqSection from "./components/hompage/faq-section/FaqSection";
import Features from "./components/hompage/features-section/Features";
import HereSection from "./components/hompage/hero-section/HeroSection";
import Pricing from "./components/hompage/pricing/Pricing";
import Testimonials from "./components/hompage/testimonies/Testimonials";

function App() {

  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
