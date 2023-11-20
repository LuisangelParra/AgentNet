import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login-form.css";


export function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        email,
        password,
      });
      console.log(response.data);
      // Manejar el token y redirigir o realizar otras acciones necesarias
      // Store the token in localStorage (or sessionStorage)
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error de login:', error.response.data);
      // Manejar el error, mostrar un mensaje al usuario, etc.
    }
  };

  return (
    <form className="login-box" onSubmit={handleLogin}>
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
          onChange={(e) => setEmail(e.target.value)}
        />

        <h4>Password*</h4>
        <input
          type="password"
          placeholder="Password"
          className="login-input password"
          onChange={(e) => setPassword(e.target.value)}
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
      <button className="login-button" type="submit">Login</button>
    </form>
  );
}
