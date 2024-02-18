import { useContext } from "react";
import { createContext } from "react";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  return (
    <ProfileContext.Provider value={{}}>{children}</ProfileContext.Provider>
  );
}
