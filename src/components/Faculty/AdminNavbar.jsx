import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MuLogo from "../../assets/logos/mu-logo.png";
import IctLogo from "../../assets/logos/ictlogo.png";

const AdminNavbar = () => {
  const adminLogin = localStorage.getItem("adminLogin");
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeadStockMenuOpen, setIsDeadStockMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDeadStockMenu = () => {
    setIsDeadStockMenuOpen(!isDeadStockMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminLogin");
    navigate("/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-4 md:mx-auto">
        <div className="flex items-center space-x-2">
          <img src={MuLogo} className="h-12" alt="MuLogo" />
          <img src={IctLogo} alt="ICT" className="h-12" />
        </div>
        <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
          {adminLogin && (
            <button
              type="button"
              className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mb-4 bg-blue-500 hover:bg-blue-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
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
          className={`items-center justify-between w-full md:flex md:w-auto ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0">
            {adminLogin === "chandrasinh.parmar@marwadieducation.edu.in" && (
              <li>
                <Link className="nav-link" to="/admin-home">
                  Approvals
                </Link>
              </li>
            )}
            <li>
              <Link className="nav-link" to="/component-request-review">
                Issue Request
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/lab-entry-review">
                Lab Entries
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/complaint-review">
                Complaint Review
              </Link>
            </li>
            <li className="relative group">
              <span
                className="nav-link cursor-pointer"
                onClick={toggleDeadStockMenu}
              >
                DeadStock
              </span>
              <ul
                className={`absolute top-full left-1/2 transform -translate-x-1/2 w-60 hidden group-hover:block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 py-2 rounded-lg shadow-lg ${
                  isDeadStockMenuOpen ? "" : "hidden"
                }`}
              >
                <li>
                  <Link className="nav-dropdown-item m-4" to="/dead-stock">
                    DeadStock Overview
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-dropdown-item m-4"
                    to="/deadstock-rejected-review"
                  >
                    Rejected Review
                  </Link>
                </li>
                <li>
                  <Link className="nav-dropdown-item m-4" to="/maintenance">
                    Maintenance Register
                  </Link>
                </li>
                <li>
                  <Link className="nav-dropdown-item m-4" to="/issue">
                    Issue Register
                  </Link>
                </li>
                <li>
                  <Link className="nav-dropdown-item m-4" to="/borrow">
                    Borrow Register
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link" to="/add-subject">
                Add Subject
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/add-component">
                Add Component
              </Link>
            </li>
            {adminLogin === "chandrasinh.parmar@marwadieducation.edu.in" && (
              <li>
                <Link className="nav-link" to="/faculty-signup">
                  Add User
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
