import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

import { auth } from "../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export function useFirebase() {
  const googleProvider = new GoogleAuthProvider();
  const { state, dispatch } = useAuth();
  const user = state?.user;

  const signInUser = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user
        ? dispatch({ type: "loggedIn", user })
        : dispatch({ type: "loggedOut" });
     
    });
  }, []);

  return {
    signInUser,
    signOutUser,
    user,
  };
}
