import React from "react";
import { Link } from "react-router-dom";
import "./singup-form.css";

export function SingUpForm() {
  return (
    <form class="singup-box">
      <h1 class="singup-title">Registration</h1>
      <p class="singup-login">
        Already Registered?{" "}
        <Link to="/auth/login" class="singup-login-link">
          Login
        </Link>
      </p>
      <div class="inputs">
        <h4>You are?</h4>
        <div class="select-cont">
          <select class="select-input">
            <option value="Particular" selected>
              Particular
            </option>
            <option value="Individual">Individual</option>
          </select>
        </div>
        <div class="names">
          <div>
            <h4>First Name*</h4>
            <input
              type="text"
              placeholder="First Name"
              class="singup-input firstname"
            />
          </div>
          <div>
            <h4>Last Name*</h4>
            <input
              type="text"
              placeholder="Last Name"
              class="singup-input lastname"
            />
          </div>
        </div>

        <h4>Email*</h4>
        <input type="text" placeholder="Email" class="singup-input email" />
        <div class="passwords">
          <div>
            <h4>Password*</h4>
            <input
              type="password"
              placeholder="Password"
              class="singup-input password"
            />
          </div>
          <div>
            <h4>Confirm Password*</h4>
            <input
              type="password"
              placeholder="Confirm Password"
              class="singup-input password2"
            />
          </div>
        </div>
      </div>
      <button class="singup-button">Create My Account</button>
      <p class="singup-terms">
        By signing up, you agree to our Terms, Data Policy and Cookies Policy.
      </p>
    </form>
  );
}
