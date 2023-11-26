import React, { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import "./my-properties.css";
import { Link } from "react-router-dom";
import queryString from 'query-string';

export function MyProperties() {
  const profileId = localStorage.getItem("profileID");
  const [activeTab, setActiveTab] = useState("Publicados");
  const [properties, setProperties] = useState([]);
  const [isPublished, setIsPublished] = useState(true);
  const [pagination, setPagination] = useState(1);
  const [maxPagination, setMaxPagination] = useState(1);

  function handleTab() {
    if (activeTab === "Publicados") {
      setIsPublished(false);
      setPagination(1);
      setActiveTab("Borradores");
    } else {
      setPagination(1);
      setIsPublished(true);
      setActiveTab("Publicados");
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/houses/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        console.log("Propiedad eliminada");
        setProperties(properties.filter((property) => property.id !== id));
        console.log(properties);
        setPagination(1);
      } else {
        console.error("Error al eliminar propiedad");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const handlePublish = async (id) => {
    // Asegúrate de tener acceso a tus estados y funciones de actualización
    // como setProperties y setPagination

    // Realiza la validación de campos
    const propertyToPublish = properties.find((property) => property.id === id);
    if (!propertyToPublish || !areAllFieldsFilled(propertyToPublish)) {
      console.error("Error al publicar propiedad");

      window.alert(
        "Debes completar todos los campos de la propiedad antes de publicar."
      );

      // Construye la URL con los parámetros de la propiedad
      const queryParams = queryString.stringify(propertyToPublish);
      const redirectUrl = `/dashboard/inmuebles/publicar?${queryParams}`;

      window.location.href = redirectUrl;
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/api/houses/${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          is_published: true,
        }),
      });

      if (response.ok) {
        console.log("Propiedad publicada");
        setProperties(properties.filter((property) => property.id !== id));
        console.log(properties);
        setPagination(1);
      } else {
        console.error("Error al publicar propiedad");
        window.alert(
          "Error al publicar propiedad. Debes completar todos los campos."
        );
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  // Función para verificar si todos los campos de una propiedad están llenos
  const areAllFieldsFilled = (property) => {
    // Asume que property es un objeto con propiedades que deben ser llenadas
    // Personaliza esta función según la estructura de tus datos
    for (const key in property) {
      if (property.hasOwnProperty(key) && !property[key]) {
        return false;
      }
    }
    return true;
  };

  const handleMakePrivate = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/houses/${id}/make_private/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            is_published: false,
          }),
        }
      );

      if (response.ok) {
        console.log("Propiedad ocultada");
        setProperties(properties.filter((property) => property.id !== id));
        console.log(properties);
        setPagination(1);
      } else {
        console.error("Error al ocultar propiedad");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  useEffect(() => {
    // Función para obtener las propiedades de la API
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/houses?profile=${profileId}&is_published=${isPublished}&page=${pagination}`
        );

        if (response.ok) {
          console.log(properties);
          const data = await response.json();
          setMaxPagination(Math.ceil(data.count / 8));
          setProperties(data.results);
        } else {
          console.error("Error al obtener propiedades");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    // Llamar a la función para obtener propiedades al cambiar la pestaña activa
    fetchProperties();
  }, [activeTab, pagination]);

  return (
    <div className="my_property_container">
      <div className="main_title">
        <div className="title">
          <h1>Mis Inmuebles</h1>
          <i className="fi-rr-square-info"></i>
        </div>
        <Link to={"/dashboard/inmuebles/publicar"} className="Post">
          <h1>Publicar</h1>
          <i className="fi-rr-document"></i>
        </Link>
      </div>

      {/* Botones de pestaña */}
      <button
        className="tablink"
        id="tabPublicados"
        style={{
          backgroundColor:
            activeTab === "Publicados"
              ? "color_que_deseas_para_publicados"
              : "",
        }}
        disabled={activeTab === "Publicados" ? true : false}
        onClick={() => handleTab()}
      >
        Publicados
      </button>
      <button
        className="tablink"
        id="tabBorradores"
        style={{
          backgroundColor:
            activeTab === "Borradores"
              ? "color_que_deseas_para_borradores"
              : "",
        }}
        disabled={activeTab === "Borradores" ? true : false}
        onClick={() => handleTab()}
      >
        Borradores
      </button>

      <div>
        {/* Contenido de la pestaña "Publicados" */}
        {activeTab === "Publicados" && (
          <div id="Publicados" className="tabcontent">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="check_button"
                      />
                    </th>
                    <th>Nombre</th>
                    <th>Ubicación</th>
                    <th>Operación</th>
                    <th>Tipo</th>
                    <th>Precio</th>
                    <th>Anexos</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Insertar filas de datos aquí */}
                  {properties.map((property, index) => (
                    <tr key={index}>
                      {/* Aquí renderizas las celdas de la fila según tus necesidades */}
                      <td>
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="check_button"
                        />
                      </td>
                      <td>{property.name}</td>
                      <td>{property.city}</td>
                      <td>{property.sale_type}</td>
                      <td>{property.property_type}</td>
                      <td>{property.price}</td>
                      <td>
                        <div className="details_button">DETALLES</div>
                      </td>
                      <td>
                        <div
                          className="details_button_green"
                          onClick={() => handleMakePrivate(property.id)}
                        >
                          OCULTAR
                        </div>
                      </td>
                      <td>
                        <div
                          className="details_button_red"
                          onClick={() => handleDelete(property.id)}
                        >
                          BORRAR
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Paginación */}
              <div className="pagination">
                <button
                  className="pagination_button"
                  disabled={pagination === 1 ? true : false}
                  onClick={() => setPagination(pagination - 1)}
                >
                  Anterior
                </button>
                <div className="pagination">{pagination}</div>
                <button
                  className="pagination_button"
                  disabled={pagination === maxPagination ? true : false}
                  onClick={() => setPagination(pagination + 1)}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contenido de la pestaña "Borradores" */}
        {activeTab === "Borradores" && (
          <div id="Borradores" className="tabcontent">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="check_button"
                      />
                    </th>
                    <th>Nombre</th>
                    <th>Ubicación</th>
                    <th>Operación</th>
                    <th>Tipo</th>
                    <th>Precio</th>
                    <th>Anexos</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Insertar filas de datos aquí */}
                  {properties.map((property, index) => (
                    <tr key={index}>
                      {/* Aquí renderizas las celdas de la fila según tus necesidades */}
                      <td>
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="check_button"
                        />
                      </td>
                      <td>{property.name}</td>
                      <td>{property.city}</td>
                      <td>{property.sale_type}</td>
                      <td>{property.property_type}</td>
                      <td>{property.price}</td>
                      <td>
                        <div className="details_button">DETALLES</div>
                      </td>
                      <td>
                        <div
                          className="details_button_green"
                          onClick={() => handlePublish(property.id)}
                        >
                          PUBLICAR
                        </div>
                      </td>
                      <td>
                        <div
                          className="details_button_red"
                          onClick={() => handleDelete(property.id)}
                        >
                          BORRAR
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Paginación */}
              <div className="pagination">
                <button
                  className="pagination_button"
                  disabled={pagination === 1 ? true : false}
                  onClick={() => setPagination(pagination - 1)}
                >
                  Anterior
                </button>
                <div className="pagination">{pagination}</div>
                <button
                  className="pagination_button"
                  disabled={pagination === maxPagination ? true : false}
                  onClick={() => setPagination(pagination + 1)}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
