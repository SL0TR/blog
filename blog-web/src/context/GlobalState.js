import usePersistedState from "hooks/usePersistedState";
import React, { useContext } from "react";

const Context = React.createContext();

export function useGLobalStateContext() {
  return useContext(Context);
}

export const ContextProvider = ({ children }) => {
  const [jwtToken, setJwtToken] = usePersistedState("token", null);
  const [currentUser, setCurrentUser] = usePersistedState("currentUser", null);

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
