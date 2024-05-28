/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useToken } from "../hooks/useToken";

function Protected({ children }) {
    const {token} = useToken();
  


    if (!token) return <Navigate to="/adminlogin" />;
    return children;
}

export default Protected