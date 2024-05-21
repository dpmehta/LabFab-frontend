import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import MuLogo from "../assets/logos/mu-logo.png";
import IctLogo from "../assets/logos/mu-logo.png";
import LabFabLogo from "../assets/LabFabImage.png";
import { useState } from "react";

export default function NavBar() {
  const user = localStorage.getItem("currentUser");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-space ml-40">
          <img src={LabFabLogo} className="h-20" alt="MuLogo" />

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isLoggedIn && (
              <button
                type="button"
                className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mb-4"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
            {/* <img src={MuLogo} alt="ICT" id="ict-logo" /> */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <ul className="flex flex-col p-4 md:p-0  font-semibold  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  className="block py-2 text-gray-500 rounded md:hover:bg-transparent md:hover:text-#14a2b9 md:p-0"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 text-gray-500 rounded md:hover:bg-transparent md:hover:text-#14a2b9 md:p-0"
                  to="/component-issue"
                >
                  Component Issue
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 text-gray-500 rounded md:hover:bg-transparent md:hover:text-#14a2b9 md:p-0"
                  to="/lab-availability"
                >
                  Lab Availability
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 text-gray-500 rounded md:hover:bg-transparent md:hover:text-#14a2b9 md:p-0"
                  to="/lab-overview"
                >
                  Lab Explore
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 text-gray-500 rounded md:hover:bg-transparent md:hover:text-#14a2b9 md:p-0"
                  to="/request-show"
                >
                  My Requests
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 text-gray-500 rounded md:hover:bg-transparent md:hover:text-#14a2b9 md:p-0"
                  to="/complaint"
                >
                  Add Complaint
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 text-gray-500 rounded md:hover:bg-transparent md:hover:text-#14a2b9 md:p-0"
                  to="/complaint-review"
                >
                  My Complaints
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
