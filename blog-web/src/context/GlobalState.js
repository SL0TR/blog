import usePersistedState from "hooks/usePersistedState";
import React, { useContext } from "react";

const Context = React.createContext();

export function useGLobalStateContext() {
  return useContext(Context);
}

export const ContextProvider = ({ children }) => {
  const [jwtToken, setJwtToken] = usePersistedState("token");
  const [currentUser, setCurrentUser] = usePersistedState("token");

  return (
    <Context.Provider
      value={{
        jwtToken,
        setJwtToken,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
