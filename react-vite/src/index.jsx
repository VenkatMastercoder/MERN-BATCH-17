import "./index.css";
import "flowbite";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import ProductLayout from "./component/ProductLayout";
import Footer from "./component/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductLayout />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);