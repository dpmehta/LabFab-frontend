import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);
  return (
    <>
      <h1> You don't have access to this page</h1>
    </>
  );
};

export default RedirectPage;
