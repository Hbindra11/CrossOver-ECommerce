import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FetchApi from "../ProductPage/FetchApi";
const Layout = () => {
  return (
    <>
      <Navbar />
      <FetchApi />
      <div className="container mx-auto">
        {/* The Outlet component is a placeholder for children components under this route */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
