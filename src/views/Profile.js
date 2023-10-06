import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { profileController } from "../controller/UserController";
import Home from "./Home";

export default function Profile() {
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
    async function fetchData() {
      const response = await profileController();
      let data;
      response ? (data = response) : (data = null);
      if (data) {
        setId(data.id);
        setUserName(data.userName);
        setFirstName(data.firstName);
        setLastName(data.lastName);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <Home></Home>
      <div>
        <h1>{`Hello! ${firstName} ${lastName} your userName is ${userName} and id is ${id}`}</h1>
      </div>
    </>
  );
}
