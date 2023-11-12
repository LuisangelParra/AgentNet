import React from "react";
import { Link } from "react-router-dom";
import "./login-form.css";

export function LogInForm() {
  return (
    <form className="login-box">
      <h1 className="login-title">Log in</h1>
      <p className="login-singup">
        Don't have an account?{" "}
        <Link to="/auth/signup" className="login-singup-link">
          Register here.
        </Link>
      </p>
      <div className="inputs">
        <h4>Email*</h4>
        <input
          type="text"
          placeholder="Enter your email"
          className="login-input email"
        />

        <h4>Password*</h4>
        <input
          type="password"
          placeholder="Password"
          className="login-input password"
        />

        <div className="options">
          <div className="remember">
            <input type="checkbox" className="login-checkbox" />
            <p className="login-remember">Remember Me</p>
          </div>
          <a className="forget" href="">
            Forget Password
          </a>
        </div>
      </div>
      <button className="login-button">Login</button>
    </form>
  );
}
