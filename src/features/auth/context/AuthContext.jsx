import { createContext, useState, useEffect } from "react";
import * as authApi from "../../../api/auth-api";
import { storeToken } from "../../../utils/local-storage";
import { getToken, clearToken } from "../../../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (getToken()) {
      authApi
        .fetchMe()
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .catch((err) => {
          toast.error(err.response?.data.message);
        });
    }
  }, []);

  const register = async (user) => {
    const res = await authApi.register(user);
    setAuthUser(res.data.newUser);
    storeToken(res.data.accessToken);
  };

  const login = async (userObj) => {
    const res = await authApi.login(userObj);
    console.log(res.data.user);
    setAuthUser(res.data.user);
    storeToken(res.data.accessToken);
  };

  const logout = () => {
    setAuthUser(null);
    clearToken();
  };

  return (
    <AuthContext.Provider value={{ register, login, authUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
