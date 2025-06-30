import "./index.css";
import "flowbite";
import ReactDOM from "react-dom/client";
import Header from "./component/Header"; // Default
import HeroSection from "./component/HeroSection";
import ProductLayout from "./component/ProductLayout";
import Footer from "./component/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Counter from "./component/Counter";
import Comment from "./component/Comment";
import ErrorPage from "./component/ErrorPage";
import ProductDetails from "./component/ProductDetails";
import Contact from "./component/Contact";
import ImageComponent from "./component/ImageComponent";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductLayout />
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/**
       * /abc
       * if(path==="/counter") return <Counter />
       * if(path==="/comment") return <Comment />
       * if(path==="/") return return <Home />
       * else return <ErrorPage/>
       */}
      <Footer />
    </>
  );
};

// localhost:3000/abc ---> <AppLayout />
const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/comment",
        element: <Comment />,
      },
      {
        path: "/products/:product_id",
        element: <ProductDetails />,
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/image",
        element: <ImageComponent/>
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
