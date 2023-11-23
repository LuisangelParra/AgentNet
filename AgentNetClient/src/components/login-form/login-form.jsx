import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login-form.css";

export function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  // Cargar datos almacenados si se recuerda al usuario
  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedRememberMe = localStorage.getItem("rememberMe");

    if (storedRememberMe === "true" && storedEmail) {
      setEmail(storedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        email,
        password,
      });
      console.log(response.data);

      // Verificar si la respuesta tiene un token
      if (response.data.token) {
        // Manejar el token y redirigir o realizar otras acciones necesarias
        // Almacenar el token en localStorage (o sessionStorage)
        localStorage.setItem("token", response.data.token);

        // Almacenar el email si se recuerda al usuario
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
          localStorage.setItem("rememberMe", true);
        } else {
          localStorage.removeItem("rememberedEmail");
          localStorage.removeItem("rememberMe");
        }

        navigate("/dashboard");
      } else {
        setError("Authentication failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error de login:", error.response.data);
      setError("Authentication failed. Please check your credentials.");
      // Manejar el error, mostrar un mensaje al usuario, etc.
    }
  };

  return (
    <form className="login-box" onSubmit={handleLogin}>
      <h1 className="login-title">Log in</h1>
      {error && <p className="error-message">{error}</p>}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h4>Password*</h4>
        <input
          type="password"
          placeholder="Password"
          className="login-input password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="options">
          <div className="remember">
            <input
              type="checkbox"
              className="login-checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <p className="login-remember">Remember Me</p>
          </div>
          <a className="forget" href="">
            Forget Password
          </a>
        </div>
      </div>
      <button className="login-button" type="submit">
        Login
      </button>
    </form>
  );
}
