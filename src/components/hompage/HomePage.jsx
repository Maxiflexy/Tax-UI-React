import BusinessTask from "./business-task/BusinessTask";
import GetStarted from "./business-task/GetStarted";
import FaqSection from "./faq-section/FaqSection";
import Features from "./features-section/Features";
import HereSection from "./hero-section/HeroSection";
import Pricing from "./pricing/Pricing";
import Testimonials from "./testimonies/Testimonials";

export const HomePage = () => {
  return (
    <>
      <HereSection />
      <Features />
      <BusinessTask />
      <GetStarted />
      <Testimonials />
      <Pricing />
      <FaqSection />
    </>
  );
};
