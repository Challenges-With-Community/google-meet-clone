import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "./../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

export function Login() {
  // const [user, loading, error] = useAuthState(auth);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (loading) {
  //     // maybe trigger a loading screen
  //     return;
  //   }
  //   console.log('user exist:', user);
  //   // if (user) navigate("/dashboard");
  // }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
        <button className="login__btn login__google" >
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}