import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthProvider = createContext(null);
const Provider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const GoogleSingin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    signOut(auth);
  };
  const updateuserProfile = (username, photo) => {
    updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
  };
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoader(() => Math.random());
    });
    return () => unsuscribe();
  }, [loader]);
  const authInfo = {
    createUser,
    singinUser,
    logOut,
    user,
    GoogleSingin,
    updateuserProfile,
  };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default Provider;
