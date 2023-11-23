import React from "react";
import "./post.css";
import { Link } from "react-router-dom";


export function Post() {
    return (
        <div>
            <div className="m-back">
                <Link to={"/dashboard/inmuebles/misinmuebles"} className="back">
                    <i className="fi-rr-arrow-left"></i>
                    <h1>Volver</h1>
                </Link>
            </div>
            <div className="main_container">
                <div className="main_title">
                    <h1>Publicar un Inmueble</h1>
                    <i className="fi-rr-square-info"></i>
                </div>
            </div>

            <div className="rectangle">
                <div className="title-rectangle">
                    <h1>Fotos</h1>
                    <div className="container-squares">
                        <div className="squares1">
                            <i className="fi-rr-plus"></i>
                        </div>
                        <div className="squares2"></div>
                        <div className="squares3"></div>
                        <div className="squares4"></div>
                        <div className="squares5"></div>
                    </div>
                    <div className="subtitle-rectangle">
                        <h1>Ubicación</h1>
                        <div className="search_box">
                            <div className="search_bar">
                                <input
                                    type="text"
                                    name="search_bar"
                                    id="search_bar"
                                    placeholder="Buscar una Dirección"
                                />
                                <i className="fi-rr-search"></i>
                            </div>
                        </div>
                        <div className="tags">
                            <h2>Tags</h2>
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
                        </div>
                    </div>
                </div>
                <div className="map-container">
                    <h1>Mapa</h1>
                    <div className="additional-square"></div>
                </div>
            </div>
        </div>
    );
}