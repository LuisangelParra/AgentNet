import React, { useState, useEffect } from "react";
import "./my-properties.css";
import { Link } from "react-router-dom";

export function MyProperties() {
  // Estado para almacenar la pestaña activa
  const profileId = localStorage.getItem("profileID")
  const [activeTab, setActiveTab] = useState("Publicados");
  const [properties, setProperties] = useState([]);
  const [isPublished, setIsPublished] = useState(true);

  function handleTab() {
    if (activeTab === "Publicados") {
      setIsPublished(false);
      setActiveTab("Borradores");
    } else {
      
      setIsPublished(true);
      setActiveTab("Publicados");
    }
  }

  useEffect(() => {
    // Función para obtener las propiedades de la API
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/houses?profile=${profileId}&is_published=${isPublished}`
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setProperties(data);
        } else {
          console.error("Error al obtener propiedades");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    // Llamar a la función para obtener propiedades al cambiar la pestaña activa
    fetchProperties();
  }, [activeTab]);

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
        disabled = {activeTab === "Publicados" ? true : false}
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
        disabled = {activeTab === "Borradores" ? true : false}
        onClick={() => handleTab()}
      >
        Borradores
      </button>

      <div>
        {/* Contenido de la pestaña "Publicados" */}
        {activeTab === "Publicados" && (
          <div id="Publicados" className="tabcontent">
            <div className="search_box">
              <div className="search_bar">
                <input
                  type="text"
                  name="search_bar"
                  id="search_bar"
                  placeholder="Escribe una palabra clave"
                />
                <i className="fi-rr-search"></i>
              </div>
            </div>

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
                    <th>Foto</th>
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
                      <td>{property.photo}</td>
                      <td>{property.city}</td>
                      <td>{property.sale_type}</td>
                      <td>{property.property_type}</td>
                      <td>{property.price}</td>
                      <td>
                        <div className="details_button">DETALLES</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Contenido de la pestaña "Borradores" */}
        {activeTab === "Borradores" && (
          <div id="Borradores" className="tabcontent">
            <div className="search_box">
              <div className="search_bar">
                <input
                  type="text"
                  name="search_bar"
                  id="search_bar"
                  placeholder="Escribe una palabra clave"
                />
                <i className="fi-rr-search"></i>
              </div>
            </div>

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
                    <th>Foto</th>
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
                      <td>{property.photo}</td>
                      <td>{property.city}</td>
                      <td>{property.sale_type}</td>
                      <td>{property.property_type}</td>
                      <td>{property.price}</td>
                      <td>
                        <div className="details_button">DETALLES</div>
                      </td>
                      <td>
                        <div className="details_button_green">PUBLICAR</div>
                      </td>
                      <td>
                        <div className="details_button_red">PUBLICAR</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
