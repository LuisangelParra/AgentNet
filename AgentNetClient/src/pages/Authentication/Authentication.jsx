import { Routes, Route } from "react-router-dom";
import "./Authentication.css";
import { LogInForm } from "../../components/login-form/login-form";
import { SingUpForm } from "../../components/singup-form/singup-form";
import React from "react";

export function Authentication() {
    return(
        <div className="authentication-container">
            <Routes>
                <Route path="/login" element={<LogInForm />} />
                <Route path="/signup" element={<SingUpForm />} />
            </Routes>
        </div>
    );
}