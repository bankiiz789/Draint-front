import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import useAuth from "../../auth/hooks/use-auth";
import { useEffect } from "react";
import * as userApi from "../../../api/user-api";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const { authUser } = useAuth();
  const [myStory, setMyStory] = useState([]);

  useEffect(() => {
    userApi
      .getMyStory(authUser?.id)
      .then((res) => {
        setMyStory(res.data.myStory.myStory);
        console.log(myStory);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProfileContext.Provider value={{ myStory }}>
      {children}
    </ProfileContext.Provider>
  );
}
