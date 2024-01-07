import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonial from "./components/testimonial";

export default function App() {
  return (
    <div className="max-w-[1770px] mx-auto py-4">
      <Navbar />
      <About />
      <Testimonial />
      <CTA />
      <Footer />
      Shoe Landing
    </div>
  );
}
