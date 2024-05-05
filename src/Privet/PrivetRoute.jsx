import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../Provider/Provider";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthProvider);
  const location = useLocation();
  const Navigate = useNavigate();

  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivetRoute;
