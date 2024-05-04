import AdminNavbar from "./AdminNavbar";
import "../../styles/AdminNavbar.css";
import { useState } from "react";

const AdminHome = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeValue, setActiveValue] = useState(null);

  const handleItemClick = (index, value) => {
    setActiveIndex(index);
    setActiveValue(value);
  };
  return (
    <div>
      <AdminNavbar />
      <ul className="admin-list">
        <li
          className={`admin-list-items ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => handleItemClick(0, "All")}
        >
          All
        </li>
        <li
          className={`admin-list-items ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => handleItemClick(1, "Approved")}
        >
          Approved
        </li>
        <li
          className={`admin-list-items ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => handleItemClick(2, "Pending")}
        >
          Pending
        </li>
        <li
          className={`admin-list-items ${activeIndex === 3 ? "active" : ""}`}
          onClick={() => handleItemClick(3, "Rejected")}
        >
          Rejected
        </li>
      </ul>
    </div>
  );
};

export default AdminHome;
