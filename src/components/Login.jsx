import React, { useState } from "react";
import linkedInLogo from "../assets/LinkedIn_Logo.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userSlice";

const Login = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [profilePIC, setprofilePIC] = useState("");
  const dispatch = useDispatch();

  const logInHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        console.log(userAuth.user);
        dispatch(
          userActions.login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };

  const registerHandler = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilePIC,
        });
        return userAuth
      })
      .then((userAuth) => {
        console.log(userAuth.user);
        dispatch(
          userActions.login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profilePIC,
          })
        );
      })
      .catch((err) => alert(err.message));
  };

  const inputStyle = "h-10 border border-black rounded px-4";
  const loginFormSubmitHandler = () => {
    console.log({
      name,
      password,
      email,
      profilePIC,
    });
  };
  return (
    <div className="w-[60%] md:w-[45%] lg:w-[30%] m-auto flex flex-col gap-4 py-20">
      <img src={linkedInLogo} alt="" className="object-contain h-20 mx-auto" />
      <div className="flex flex-col gap-2">
        {/* NAME */}
        <input
          type="text"
          placeholder="Full name (required if registering)"
          className={inputStyle}
          value={name}
          onChange={(event) => setname(event.target.value)}
        />
        {/* PROFILE PICTURE */}
        <input
          type="text"
          placeholder="Profile picture URL (Optional)"
          className={inputStyle}
          value={profilePIC}
          onChange={(event) => setprofilePIC(event.target.value)}
        />
        {/* EMAIL */}
        <input
          type="text"
          placeholder="Email"
          className={inputStyle}
          value={email}
          onChange={(event) => setemail(event.target.value)}
        />
        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className={inputStyle}
          value={password}
          onChange={(event) => setpassword(event.target.value)}
        />
        <button
        type="button"
          className="bg-[#0288D1] text-white border border-black rounded p-2"
          onClick={logInHandler}
        >
          Sign in
        </button>
      </div>
      <h1 className="text-center">
        Not a member ?{" "}
        <a
          href="#"
          className="text-blue-500 hover:underline"
          onClick={registerHandler}
        >
          Register now
        </a>
      </h1>
    </div>
  );
};

export default Login;
