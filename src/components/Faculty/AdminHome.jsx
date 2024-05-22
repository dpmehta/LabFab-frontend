import AdminNavbar from "./AdminNavbar";
import "../../styles/AdminNavbar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AdminHome = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [entries, setEntries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [remark, setRemark] = useState("");
  const [remarkEntryId, setRemarkEntryId] = useState("");

  const handleItemClick = async (index, status) => {
    setActiveIndex(index);
    try {
      const options = {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      };
      const response = await axios.post(
        "https://labfab.onrender.com/api/deadstock/filterByStatus",
        {
          status: status,
        },
        options
      );
      setEntries(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleItemClick(0, "All");
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  const handleSubmit = async () => {
    try {
      const options = {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      };
      const response = await axios.put(
        "https://labfab.onrender.com/api/deadstock/updateRemark",
        {
          remark: remark,
          id: remarkEntryId,
          status: "rejected",
        },
        options
      );
      response.data.success
        ? toast.success("Remark Added Successfully", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          })
        : toast.error("Some Error Occured", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAccept = async (entryId) => {
    try {
      const options = {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      };
      const response = await axios.put(
        "https://labfab.onrender.com/api/deadstock/updateStatus",
        {
          status: "approved",
          id: entryId,
        },
        options
      );
      response.data.success
        ? toast.success("Approved Successfully", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          })
        : toast.error("Some Error Occured", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
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
            onClick={() => handleItemClick(1, "approved")}
          >
            Approved
          </li>
          <li
            className={`admin-list-items ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleItemClick(2, "pending")}
          >
            Pending
          </li>
          <li
            className={`admin-list-items ${activeIndex === 3 ? "active" : ""}`}
            onClick={() => handleItemClick(3, "rejected")}
          >
            Rejected
          </li>
        </ul>
      </div>

      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4"></div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b"
                >
                  Lab No.
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                >
                  Dead Stock Number
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                >
                  Description / Name of goods
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                >
                  Purchase Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                >
                  Suppliers Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                >
                  Rate
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                >
                  Purchase Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                >
                  Year
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                >
                  Submitted By
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {entries.map((entry, index) => (
                <tr
                  key={entry._id}
                  className="transition-all hover:bg-gray-100"
                >
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    {entry.labNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    {entry.deadStockNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    {entry.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    {formatDate(entry.purchaseDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    {entry.suppliersName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    {entry.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    {entry.rate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    {entry.purchaseAmount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    {entry.year}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    {entry.adminId.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => handleAccept(entry._id)}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mr-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 inline-block -mt-0.5"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => {
                          setIsModalOpen(true);
                          setRemarkEntryId(entry._id);
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 inline-block -mt-0.5"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="text-lg font-semibold mb-4">Add Remark</div>
            <div className="mb-4">
              <label htmlFor="remark" className="block text-gray-700">
                Remark
              </label>
              <input
                type="text"
                value={remark}
                onChange={(e) => {
                  setRemark(e.target.value);
                }}
                id="remark"
                name="remark"
                placeholder="Enter remark..."
                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => handleSubmit()}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
              >
                Submit
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                }}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHome;
