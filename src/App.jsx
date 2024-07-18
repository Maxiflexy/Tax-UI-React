import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "./App.css";
import Footer from "./components/NavAndFooter/Footer";
import NavBar from "./components/NavAndFooter/NavBar";
import { HomePage } from "./components/hompage/HomePage";
import Features from "./components/hompage/features-section/Features";
import Testimonials from "./components/hompage/testimonies/Testimonials";
import Pricing from "./components/hompage/pricing/Pricing";
import FaqSection from "./components/hompage/faq-section/FaqSection";
import BusinessTask from "./components/hompage/business-task/BusinessTask";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(


  createRoutesFromElements(
  <Route path="/" element={<Layout />} >


    <Route index element={<HomePage />} />

    <Route path="/features" element={<Features />} />

    <Route path="/testimonial" element={<Testimonials />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/faq" element={<FaqSection />} />
    <Route path="/business" element={<BusinessTask />} />
  </Route> 
)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
