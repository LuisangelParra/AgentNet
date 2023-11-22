import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./singup-form.css";

const errorMessages = {
  passwordMismatch: "Las contraseñas no coinciden",
  emailExists: "Este correo ya está registrado",
  passwordLength: "La contraseña debe tener al menos 8 caracteres",
};

export function SingUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setpassword2] = useState("");
  const [error, setError] = useState("");
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);
  const [emailExistsError, setEmailExistsError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    // Resetear mensajes de error al intentar nuevamente
    setPasswordMismatchError(false);
    setEmailExistsError(false);
    setPasswordLengthError(false);

    // Validar longitud mínima de la contraseña
    if (password.length < 8) {
      setPasswordLengthError(true);
      return;
    }

    // Validar contraseñas
    if (password !== password2) {
      setPasswordMismatchError(true);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/signup/", {
        firstName,
        lastName,
        email,
        password,
        // Otros campos del formulario
      });
      console.log(response.data);
      // Manejar el token y redirigir o realizar otras acciones necesarias
    } catch (error) {
      console.error("Error de signup:", error.response.data);
      // Validar si el correo ya existe en la base de datos
      if (error.response.data.message.includes("correo")) {
        setEmailExistsError(true);
      }
      // Manejar el error, mostrar un mensaje al usuario, etc.
    }
  };

  return (
    <form className="singup-box" onSubmit={handleSignup}>
      <h1 className="singup-title">Registration</h1>
      <p className="singup-login">
        Already Registered?{" "}
        <Link to="/auth/login" className="singup-login-link">
          Login
        </Link>
      </p>
      <div className="inputs">
        <h4>You are?</h4>
        <div className="select-cont">
          <select className="select-input">
            <option value="Particular" defaultValue>
              Particular
            </option>
            <option value="Individual">Individual</option>
          </select>
        </div>
        <div className="names">
          <div>
            <h4>First Name*</h4>
            <input
              type="text"
              placeholder="First Name"
              className="singup-input firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <h4>Last Name*</h4>
            <input
              type="text"
              placeholder="Last Name"
              className="singup-input lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <h4>Email*</h4>
        <input
          type="text"
          placeholder="Email"
          className="singup-input email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailExistsError && (
          <p className="error-message">{errorMessages.emailExists}</p>
        )}
        <div className="passwords">
          <div>
            <h4>Password*</h4>
            <input
              type="password"
              placeholder="Password"
              className="singup-input password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {(passwordLengthError || passwordMismatchError) && (
              <div className="error-container">
                {passwordLengthError && (
                  <p className="error-message">{errorMessages.passwordLength}</p>
                )}
                {passwordMismatchError && (
                  <p className="error-message">{errorMessages.passwordMismatch}</p>
                )}
              </div>
            )}
          </div>
          <div>
            <h4>Confirm Password*</h4>
            <input
              type="password"
              placeholder="Confirm Password"
              className="singup-input password2"
              onChange={(e) => setpassword2(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button className="singup-button" type="submit">
        Create My Account
      </button>
      <p className="singup-terms">
        By signing up, you agree to our Terms, Data Policy and Cookies Policy.
      </p>
    </form>
  );
}
