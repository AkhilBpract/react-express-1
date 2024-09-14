import React, { createContext, useContext, useReducer } from "react";
const initial = {
  id: "",
  email: "",
  first_name: "",
  last_name: "",
};
const reducer = (state, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "SUCCESS_LOGIN":
      return { ...payload };
    default:
      return state;
  }
};

const JwtContext = createContext(initial);
const AuthContext = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, initial);

  return (
    <JwtContext.Provider value={{ user, dispatch }}>
      {children}
    </JwtContext.Provider>
  );
};

export default AuthContext;
export const useAuth = () => useContext(JwtContext);
