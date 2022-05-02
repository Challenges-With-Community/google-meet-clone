export function useFirebase() {
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      // const q = query(collection(db, "users"), where("uid", "==", user.uid));
      // const docs = await getDocs(q);
      // if (docs.docs.length === 0) {
      //   await addDoc(collection(db, "users"), {
      //     uid: user.uid,
      //     name: user.displayName,
      //     authProvider: "google",
      //     email: user.email,
      //   });
      // }
      return user;
    } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };


    const logout = () => {
      signOut(auth);
    };

    return {
      signInWithGoogle,
    };
}