import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <Navbar />
      <CTA />
      <Footer />
      Shoe Landing
    </div>
  );
}
