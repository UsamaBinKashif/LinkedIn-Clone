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
  const [direct, setDirect] = useState(true);
  const dispatch = useDispatch();

  //User Login Function
  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileURLi: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  //User Register Function
  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter the name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profile,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profile,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      {direct ? (
        <>
          <div className="login">
            <img src={linkedinFullLogo} alt="linkedin full logo" />
            <form>
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
              <button className="input__register" onClick={() => setDirect(false)}>
                Register Now
              </button>
            </p>
          </div>
        </>
      ) : (
        <>
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
              <button type="submit" onClick={register}>
                Sign up
              </button>
            </form>
            <p>
              Already have an account?
              
              <button className="input__register" onClick={() => setDirect(true)}>
                Sign in
              </button>
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default Login;
