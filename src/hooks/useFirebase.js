import { auth } from "../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuth } from "../context/AuthContext";

export function useFirebase() {
  const googleProvider = new GoogleAuthProvider();
  const { state, dispatch } = useAuth();
  const user = state?.user;

  const signIn = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res?.user;
      dispatch({ type: "loggedIn", user });
    } catch (err) {
      console.error(err);
    }
  };

  return {
    signIn,
    user,
  };
}
