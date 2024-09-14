import React, { createContext, useContext, useEffect, useReducer } from "react";
import useGetProfile from "../../home/hook/use-get-profile";
const initial = {
  id: "",
  email: "",
  first_name: "",
  last_name: "",
  isLogin: false,
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SUCCESS_LOGIN":
      return { ...state, isLogin: true, ...payload };
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
