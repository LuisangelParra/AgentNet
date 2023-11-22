import React, { useState } from "react";
import "./my-properties.css";

export function MyProperties() {
    // Estado para almacenar la pestaña activa
    const [activeTab, setActiveTab] = useState("Publicados");

    return (
        <div className="main_container">
            <div className="main_title">
                <h1>Mis Inmuebles</h1>
                <i className="fi-rr-square-info"></i>
            </div>

            {/* Botones de pestaña */}
            <button
                className="tablink"
                id="tabPublicados"
                style={{ backgroundColor: activeTab === "Publicados" ? 'color_que_deseas_para_publicados' : '' }}
                onClick={() => setActiveTab("Publicados")}
            >
                Publicados
            </button>
            <button
                className="tablink"
                id="tabBorradores"
                style={{ backgroundColor: activeTab === "Borradores" ? 'color_que_deseas_para_borradores' : '' }}
                onClick={() => setActiveTab("Borradores")}
            >
                Borradores
            </button>

            <div>
                {/* Contenido de la pestaña "Publicados" */}
                {activeTab === "Publicados" && (
                    <div id="Publicados" className="tabcontent">
                        <div className="search_box">
                            <div className="search_bar">
                                <input type="text" name="search_bar" id="search_bar" placeholder="Escribe una palabra clave" />
                                <i className="fi-rr-search"></i>
                            </div>
                        </div>

                        <div className="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" name="" id="" className="check_button" /></th>
                                        <th>Foto</th>
                                        <th>Ubicación</th>
                                        <th>Operación</th>
                                        <th>Tipo</th>
                                        <th>Precio</th>
                                        <th>ANEXOS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Insertar filas de datos aquí */}
                                    <tr>
                                        <td><input type="checkbox" name="" id="" className="check_button" /></td>
                                        <td></td>
                                        <td>Bogota</td>
                                        <td>Venta</td>
                                        <td>Departamento</td>
                                        <td>COP 900000000</td>
                                        <td>
                                            <div className="details_button">DETALLES</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="" id="" className="check_button" /></td>
                                        <td></td>
                                        <td>Bogota</td>
                                        <td>Venta</td>
                                        <td>Departamento</td>
                                        <td>COP 900000000</td>
                                        <td>
                                            <div className="details_button">DETALLES</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="" id="" className="check_button" /></td>
                                        <td></td>
                                        <td>Bogota</td>
                                        <td>Venta</td>
                                        <td>Departamento</td>
                                        <td>COP 900000000</td>
                                        <td>
                                            <div className="details_button">DETALLES</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="" id="" className="check_button" /></td>
                                        <td></td>
                                        <td>Bogota</td>
                                        <td>Venta</td>
                                        <td>Departamento</td>
                                        <td>COP 900000000</td>
                                        <td>
                                            <div className="details_button">DETALLES</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="" id="" className="check_button" /></td>
                                        <td></td>
                                        <td>Bogota</td>
                                        <td>Venta</td>
                                        <td>Departamento</td>
                                        <td>COP 900000000</td>
                                        <td>
                                            <div className="details_button">DETALLES</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="" id="" className="check_button" /></td>
                                        <td></td>
                                        <td>Bogota</td>
                                        <td>Venta</td>
                                        <td>Departamento</td>
                                        <td>COP 900000000</td>
                                        <td>
                                            <div className="details_button">DETALLES</div>
                                        </td>
                                    </tr>
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
                                <input type="text" name="search_bar" id="search_bar" placeholder="Escribe una palabra clave" />
                                <i className="fi-rr-search"></i>
                            </div>
                        </div>

                        <div className="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" name="" id="" className="check_button" /></th>
                                        <th>Foto</th>
                                        <th>Ubicación</th>
                                        <th>Operación</th>
                                        <th>Tipo</th>
                                        <th>Precio</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Insertar filas de datos aquí */}
                                    <tr>
                                        <td><input type="checkbox" name="" id="" className="check_button" /></td>
                                        <td></td>
                                        <td>Bogota</td>
                                        <td>Venta</td>
                                        <td>Departamento</td>
                                        <td>COP 900000000</td>
                                        <td>
                                            <div className="details_button">DETALLES</div>
                                        </td>
                                        <td>
                                            <div className="details_button_green">PUBLICAR</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="" id="" className="check_button" /></td>
                                        <td></td>
                                        <td>Bogota</td>
                                        <td>Venta</td>
                                        <td>Departamento</td>
                                        <td>COP 900000000</td>
                                        <td>
                                            <div className="details_button">DETALLES</div>
                                        </td>
                                        <td>
                                            <div className="details_button_green">PUBLICAR</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="" id="" className="check_button" /></td>
                                        <td></td>
                                        <td>Bogota</td>
                                        <td>Venta</td>
                                        <td>Departamento</td>
                                        <td>COP 900000000</td>
                                        <td>
                                            <div className="details_button">DETALLES</div>
                                        </td>
                                        <td>
                                            <div className="details_button_green">PUBLICAR</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="" id="" className="check_button" /></td>
                                        <td></td>
                                        <td>Bogota</td>
                                        <td>Venta</td>
                                        <td>Departamento</td>
                                        <td>COP 900000000</td>
                                        <td>
                                            <div className="details_button">DETALLES</div>
                                        </td>
                                        <td>
                                            <div className="details_button_green">PUBLICAR</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
}
