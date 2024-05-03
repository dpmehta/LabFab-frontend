import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import MuLogo from "../assets/images/mu-logo.png";
import IctLogo from "../assets/images/ictlogo.png";

export default function NavBar() {
  const user = localStorage.getItem("currentUser");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
    <>
      <header className="header top-0 bg-white shadow-md flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-2 sticky top-0 z-50">
        <img src={MuLogo} alt="logo" className="w-40 sm:mr-0" />

        <nav className="nav ml-60 font-semibold text-lg flex-grow">
          <ul className="flex items-center justify-center sm:justify-end">
            <li className="p-3 b-2 flex-shrink-0">
              <Link to="/home">Home</Link>
            </li>
            <li className="p-3 b-2 flex-shrink-0">
              <Link to="/component-issue">Component Issue</Link>
            </li>
            <li className="p-3 b-2 flex-shrink-0">
              <Link to="/lab-availability">Lab Availability</Link>
            </li>
            <li className="p-3 b-2 flex-shrink-0">
              <Link to="/lab-overview">Lab Explore</Link>
            </li>
            <li className="p-3 b-2 flex-shrink-0">
              <Link to="/request-show">My Requests</Link>
            </li>

            <li className="p-3 b-2 flex-shrink-0">
              <Link to="/complaint">Add Complaint</Link>
            </li>
            <li className="p-3 b-2 flex-shrink-0">
              <Link to="/complaint-review">My Complaints</Link>
            </li>
          </ul>
        </nav>
        <div className="w-full sm:w-3/12 flex justify-center  sm:justify-end">
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              type="button"
              className="btn btn-info mb-3 mr-3"
              style={{
                backgroundColor: "#14a2b9",
                borderColor: "#14a2b9",
                color: "white",
              }}
            >
              Logout
            </button>
          )}
          <img
            src={IctLogo}
            alt="ICT"
            id="ict-logo"
            className="w-30  lg:mr-30"
          />
        </div>
      </header>
    </>
  );
}
