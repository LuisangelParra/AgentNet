import React from "react";
import "./requeste-menu.css";

export function RequestMenu() {
    return ( 
        <div className="main_container">
        <div className="main_title">
            <h1>Mis Solicitudes</h1>
            <i className="fi-rr-square-info"></i>
        </div>

        <div className="main_box">
            <div className="search_box">
                <div className="search_bar">
                    <input type="text" name="search_bar" id="search_bar" placeholder="Busca aqui por nombre, apellido, empresa, etc."/>
                    <i className="fi-rr-search"></i>
                </div>
                <div className="search_button">Filtrar</div>
            </div>
            <div className="table">
                <table>
                    <tbody>
                        <tr>
                            <th><input type="checkbox" name="" id="" className="check_button"/></th>
                            <th>ID SOLICITUD</th>
                            <th>SOLICITANTE</th>
                            <th>FUENTE</th>
                            <th>NOMBRE</th>
                            <th>ESTADO</th>
                            <th>ANEXOS</th>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" className="check_button"/></td>
                            <td>1095314</td>
                            <td>Cliente</td>
                            <td>Perfil agente</td>
                            <td>Marcela Valencia</td>
                            <td>Atentido</td>
                            <td><div className="details_button">DETALLES</div></td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        </div>
        
    </div>
     );
}

export default RequestMenu;