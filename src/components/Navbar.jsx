import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/crossover-logo.png"; 
function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <nav className="p-4 w-full">
        <div className="container mx-auto flex justify-start items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="CrossOver Logo" className="h-20 w-30" /> 
            <span className="text-primary text-lg font-bold">CrossOver - Beyond Shopping</span>
          </Link>
          <div className="flex space-x-4 ml-auto">
            <Link to="/" className="text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary">
              Contact
            </Link>
            <Link to="/signin" className="text-gray-700 hover:text-primary">
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
