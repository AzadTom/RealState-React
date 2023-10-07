import { createContext, useContext } from "react";
import { AuthContextProvider } from "./AuthContextProvider.jsx";

export const AuthContext = createContext();

export default AuthContextProvider

export const useAuth = ( ) => useContext(AuthContext);



