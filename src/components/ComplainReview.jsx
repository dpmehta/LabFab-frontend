import React, { useState, useEffect } from "react";
import axios from "axios";
const ComplainReview = () => {
  const [componentComplaints, setComponentComplaints] = useState([]);
  const [computerComplaints, setComputerComplaints] = useState([]);
  const [activeOption, setActiveOption] = useState("Component");

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  useEffect(() => {
    const fetchComponentComplaints = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/complaints/component-complaint"
        );
        setComponentComplaints(response.data.componentComplaints);
        setComputerComplaints([]);
      } catch (error) {
        console.error("Error fetching component issues:", error);
      }
    };

    const fetchComputerComplaints = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/computer-complaints/computer-complaint"
        );
        setComputerComplaints(response.data.computerComplaints);
        setComponentComplaints([]);
      } catch (error) {
        console.error("Error fetching component issues:", error);
      }
    };
    activeOption === "Component"
      ? fetchComponentComplaints()
      : fetchComputerComplaints();
  }, [activeOption]);

  return (
    <>
      <div className="relative max-w-md mx-auto mt-3">
        <div className="overflow-hidden bg-gray-200 pb-3 pr-3 pl-3 shadow-md">
          <div className="flex justify-around">
            {["Component", "Computer(PC)"].map((option) => (
              <button
                key={option}
                className={`w-1/4 py-2 text-center font-medium text-sm ${
                  activeOption === option
                    ? "text-white bg-blue-500"
                    : "text-gray-600 bg-transparent"
                } focus:outline-none`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
      {componentComplaints.map((componentComplaint, index) => {
        return (
          <div
            key={componentComplaint._id}
            className="relative flex flex-col mt-6 text-gray-700 shadow-outline bg-clip-border rounded-xl mr-4 ml-4 sm:h-80 border border-gray-300 shadow-sm"
          >
            <div className="flex flex-row justify-between">
              <div className="p-6">
                <div className="flex items-center">
                  <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Complain from {componentComplaint.studentToken.student_name}{" "}
                    from Sem 6
                  </h5>
                </div>
                <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                  Component Name : {componentComplaint.componentName}
                </p>

                <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                  Component ID : {componentComplaint.componentId}
                </p>
                <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                  Issue Description : {componentComplaint.issueDescription}
                </p>
                <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                  Lab Location : {componentComplaint.labLocation}
                </p>
                <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                  Status : {componentComplaint.status}
                </p>
                <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                  Complaint Date : {componentComplaint.timestamp}
                </p>
                <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                  GR Number : {componentComplaint.studentToken.grNumber}{" "}
                </p>
              </div>

              <div className="p-6 flex justify-end items-center">
                <img
                  src={
                    "http://localhost:5173/@fs/E:/Lab%20Portal/lab-portal-backend/" +
                    componentComplaint.imageUpload
                  }
                  alt="Placeholder"
                  className="h-48 sm:h-64 w-48 sm:w-56 object-cover"
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* Second container */}
      {computerComplaints.map((computerComplaint, index) => {
        return (
          <div
            key={computerComplaint._id}
            className="relative flex flex-col mt-6 text-gray-700 shadow-outline bg-clip-border rounded-xl mr-4 ml-4 sm:h-80 border border-gray-300 shadow-sm"
          >
            <div className="flex flex-row justify-between">
              {/* Left side content */}
              <div className="p-6">
                <div className="flex items-center">
                  <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Complain from {computerComplaint.studentToken.student_name}{" "}
                    from Sem 6
                  </h5>
                </div>
                <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                  Desktop ID : {computerComplaint.desktopId}
                </p>
                <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                  Issue : {computerComplaint.issue}
                </p>
                <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                  Lab Location : {computerComplaint.labLocation}
                </p>
                <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                  GR Number : {computerComplaint.studentToken.grNumber}
                </p>
                <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                  Complaint Date : {computerComplaint.timestamp}
                </p>
                <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                  Status : {computerComplaint.status}
                </p>
              </div>

              <div className="p-6 flex justify-end items-center">
                <img
                  src={
                    "http://localhost:5173/@fs/E:/Lab%20Portal/lab-portal-backend/" +
                    computerComplaint.imageUpload
                  }
                  alt="Placeholder"
                  className="h-48 sm:h-64 w-48 sm:w-56 object-cover"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ComplainReview;
