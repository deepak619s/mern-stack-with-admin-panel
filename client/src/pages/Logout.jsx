import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Logout = () => {
  const { LogoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    LogoutUser();
    navigate("/login");
  }, [LogoutUser]);

  return null;
};
