import React, { useState } from "react";
import "./Login.css";
import linkedinFullLogo from "./linkedin-logo.png";
import { auth } from "./firebase";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const dispatch = useDispatch();

  const loginToApp = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await auth.signInWithEmailAndPassword(email, password);

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  const register = async () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    try {
      const userAuth = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await userAuth.user.updateProfile({
        displayName: name,
        photoUrl: profile,
      });

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profile,
        })
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="login">
      <img src={linkedinFullLogo} alt="linkedin full logo" />
      <form>
        <input
          type="text"
          placeholder="Your Full Name (required if registering new user)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          placeholder="Profile Picture URL (optional)"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email Address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a member?
        <button className="input__register" onClick={register}>
          Register Now
        </button>
      </p>
    </div>
  );
}

export default Login;
