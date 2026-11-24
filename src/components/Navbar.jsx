
import React, { useState, useContext } from "react";
import { UserRound } from "lucide-react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import toast from "react-hot-toast";

const Navbar = () => {
  const { navigate, user, setUser } = useContext(AppContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/hotels" },
    { name: "Rooms", path: "/rooms" },
    { name: "About", path: "/about" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logout = async () => {
    // logout function is used to log out the user by setting the user state to false.
    // toast.success() displays a success notification after the user logs out.
    setUser(false);
    setIsMenuOpen(false);
    navigate("/");
    toast.success("logout successfull");
  };

  return (
    <nav
      className="fixed top-0 left-0 bg-[#FF6347] w-full flex
     items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 py-4 md:py-6 text-white"
    >
      {/* Logo */}
      <Link
        to="/"
        //This Link tag is used when clicking on the logo, it will navigate to the home page without reloading the page.
        className="flex items-center gap-2"
      >
        <img src={assets.logo} alt="Logo" className="h-9" />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="group flex flex-col gap-0.5 text-white"
          >
            {link.name}
            <div className="bg-white h-0.5 w-0 group-hover:w-full transition-all duration-300" />
          </Link>
        ))}

        <button
          onClick={() => {
            navigate("/owner");
            setIsMenuOpen(false);
          }}
          className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all"
        >
          Owner
        </button>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <div className="relative group inline-block">
            <UserRound className="w-12 h-12 rounded-full bg-white text-gray-700 p-2 cursor-pointer" />

            {/* Dromdown Menu */}
            <div
              className="absolute top-full right-0 w-40
                 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 
                 group-hover:visible invisible transition duration-300 z-50"
            >
              <ul className="py-2">
                <li>
                  <Link
                    //this part links to mybooking page
                    to={"/my-bookings"}
                    className="block px-4 py-2 text-sm text-gray-700
                   hover:bg-gray-100
                  "
                  >
                    My Bookings
                  </Link>
                </li>
                <li
                  onClick={logout}
                  //this performs the log out
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700
                   hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-2.5 rounded-full ml-4 transition-all duration-500 bg-white text-black
           hover:bg-primary hover:text-white cursor-pointer"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-6 w-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </Link> //Link component for navigation links in the mobile menu so no page reload
        ))}

        <button
          onClick={() => {
            navigate("/owner");
            setIsMenuOpen(false);
          }}
          className="border border-primary px-6 py-2 text-sm font-medium rounded-full cursor-pointer
           text-primary hover:bg-primary hover:text-white transition-all"
        >
          Owner
        </button>

        {user ? (
          <>
            <Link
              to="/my-bookings"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800"
            >
              My Bookings
            </Link>

            <button
              onClick={logout}
              className="px-8 py-2.5 rounded-full bg-primary text-white hover:bg-blue-700 transition-all duration-500 cursor-pointer"
            >
              Logout
            </button>

            <UserRound className="w-12 h-12 rounded-full bg-gray-100 text-gray-700 p-2" />
          </>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
              setIsMenuOpen(false);
            }}
            className="px-8 py-2.5 rounded-full bg-primary text-white hover:bg-blue-700 transition-all duration-500 cursor-pointer"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
