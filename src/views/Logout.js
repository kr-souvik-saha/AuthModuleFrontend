import { useContext, useEffect } from "react";
import { logoutController } from "../controller/UserController";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Logout() {
  const {
    userName,
    setUserName,
    id,
    setId,
    firstName,
    setFirstName,
    lastName,
    setLastName,
  } = useContext(UserContext);

  useEffect(() => {
    setUserName(null);
    setId(null);
    setFirstName(null);
    setLastName(null);

    logoutController();
  }, []);
  return <Navigate to="/signin" replace={true}></Navigate>;
}
