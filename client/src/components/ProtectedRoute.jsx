import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userProfile } from "./Service";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    async function checkUser() {
      try {
        await userProfile();
        setIsAuth(true);
      } catch (error) {
        setIsAuth(false);
      }
    }
    checkUser();
  }, []);

  if (isAuth === null)
    return (
      <div className="flex justify-center items-center text-gray-600 font-semibold text-2xl">
        Loading...
      </div>
    );
  return isAuth ? children : navigate("/user");
};

export default ProtectedRoute;
