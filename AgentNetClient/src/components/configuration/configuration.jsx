import React, { useState, useEffect } from "react";
import axios from "axios";
import "./configuration.css";

export function Configuration() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    City: "",
    State: "",
    Description: "",
    Premium: false,
    user: localStorage.getItem("profileID"),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/profile/${formData.user}/`,
        formData
      );
      console.log("Actualización exitosa", response.data);
    } catch (error) {
      console.error("Error al actualizar datos", error);
    }
  };

  useEffect(() => {
    // Puedes agregar lógica para cargar los datos existentes al cargar el componente
    // Por ejemplo, una petición GET a la misma URL con el ID correspondiente
  }, []);

  return (
    <div>
      <div className="title">
        <h1>Configuración Del Perfil</h1>
      </div>
      <div className="configuration">
        <form onSubmit={handleSubmit}>
          <label>FirstName:</label>
          <input
            type="text"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
          />

          <label>LastName:</label>
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
          />

          <label>PhoneNumber:</label>
          <input
            type="text"
            name="PhoneNumber"
            value={formData.PhoneNumber}
            onChange={handleChange}
          />

          <label>City:</label>
          <input
            type="text"
            name="City"
            value={formData.City}
            onChange={handleChange}
          />

          <label>State:</label>
          <input
            type="text"
            name="State"
            value={formData.State}
            onChange={handleChange}
          />

          <label>Description:</label>
          <input
            type="text"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
          />

          <label>Premium:</label>
          <input
            type="checkbox"
            name="Premium"
            value={formData.Premium}
            onChange={handleChange}
          />

          <button type="submit" className="cambios">Guardar cambios</button>
        </form>
      </div>
    </div>
  );
}