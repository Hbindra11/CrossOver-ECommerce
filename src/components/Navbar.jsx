import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <nav className=" p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* The Link component takes care of updating the history in the browser */}
          <Link to="/" className="text-white text-lg font-bold no-underline">
            Fake Store
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/products" className="text-gray-300 hover:text-white">
              Products
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
