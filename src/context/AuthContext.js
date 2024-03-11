import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useContext } from "react";
import { auth } from "../Firebase/firebase";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const googleProvider = new GoogleAuthProvider();
async function signInWithGoogle() {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.log(error.message);
  }
}
function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

function login(email, password) {
  signInWithEmailAndPassword(auth, email, password);
}
const values = {
  register,
  signInWithGoogle,
  login,
};

const AuthContext = ({ children }) => {
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
