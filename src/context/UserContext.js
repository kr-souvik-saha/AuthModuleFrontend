import { useEffect, useState, createContext } from "react";
import { profileController } from "../controller/UserController";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userName, setUserName] = useState();
  const [id, setId] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
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
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        id,
        setId,
        firstName,
        setFirstName,
        lastName,
        setLastName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
