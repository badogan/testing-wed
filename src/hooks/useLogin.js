import { useState, useEffect } from "react";
import API from "../APIsHelpers/API";

const useLogin = () => {
  const [emailToLogin, setEmailToLogin] = useState(null);
  const [passwordToLogin, setPasswordToLogin] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    emailToLogin && passwordToLogin && doLogin();
  }, [emailToLogin, passwordToLogin]);

  async function doLogin() {
    const result = await API.UserSignIn({
      email: emailToLogin,
      password: passwordToLogin
    });
    if (result.status === "success") {
      setToken(result.token);
      setLoggedInUser(result.data.user);
    }
  }

  const initiateLoginProcess = (email, password) => {
    setEmailToLogin(email);
    setPasswordToLogin(password);
  };

  return { initiateLoginProcess, loggedInUser, token };
};

export default useLogin;
