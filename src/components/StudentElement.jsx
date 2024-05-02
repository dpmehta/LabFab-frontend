import React from "react";
import { useNavigate } from "react-router-dom";
import RedirectPage from "./RedirectPage";

const StudentElement = ({ children }) => {
  const studentLogin = localStorage.getItem("currentUser");
  const navigate = useNavigate();
  if (studentLogin) {
    return <>{children}</>;
  } else {
    return <RedirectPage />;
  }
};

export default StudentElement;
