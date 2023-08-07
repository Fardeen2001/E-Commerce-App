import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("loginId");
  console.log(initialToken);
  const [token, setToken] = useState(initialToken);
  console.log(token);
  const userIsLoggedIn = !!token;
  const logInHandler = (token) => {
    console.log(token);
    localStorage.setItem("loginId", token);
    setToken(token);
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginId");
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
