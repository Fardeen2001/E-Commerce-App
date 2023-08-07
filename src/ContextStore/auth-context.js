import React, { useState } from "react";

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
export const AuthContextProvider = (props) => {
  const initialToken = sessionStorage.getItem("loginId");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;
  console.log(userIsLoggedIn);
  const logInHandler = (token) => {
    sessionStorage.setItem("loginId", token);
    console.log("lid", token);
    setToken(token);
  };

  const logoutHandler = () => {
    sessionStorage.removeItem("loginId");
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
