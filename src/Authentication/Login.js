import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Misc/Loading";
import "./Login.css";
import logoPic from '../Images/login.jpg';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, loading] = useAuthState(auth);

  const history = useHistory();
  useEffect(() => {
    if (loading) {
      <Loading />;
    }
  }, [user, loading]);
  const signInWithEmailAndPassword = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password).then((response) => {
      // this works fine because response.message is a string
    });

    return history.replace("/dashboard");
  };
  return (
    <>
      {/* <Navbar /> */}

      <div className="login-main">
      <div className="login-left">
      <img className="login-pic" src={logoPic} alt="" ></img>
      </div>
      <div className="login-right">
        <form className="Login_form" onSubmit={() => signInWithEmailAndPassword(email, password)}>
        <h1 className="heading-login">The Maintainace Nepal</h1>
        <h2>Login Page </h2>
        <label className="Login_email">Email Address</label>
      <input className="Login_input"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email Address"
      />
      <label className="Login_password"> Password</label>
      <input className="Login_input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button className="Login_button" >
        Login
      </button>
      </form>

      <div>
        <h5>Don't have an account? <Link to="/register">Register</Link> now.</h5>
      </div>
      </div>
      </div>
    </>
  );
};

export default Login;
