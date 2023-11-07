// REACT
import { createContext, useContext, useState } from "react";

// CONTEXT CREATION
const UserContext = createContext();

// CREATE PROVIDER FUNCTION
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// CONSUMER IS REPLACED BY USE CONTEXT HOOK
const useUser = () => {
  const user = useContext(UserContext);
  return user;
};

// EXPORTS
export { UserProvider, useUser };
