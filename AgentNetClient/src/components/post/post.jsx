import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export function Post() {
  return (
    <div className="post-container">
      <div className="m-back">
        <Link to={"/dashboard/inmuebles/misinmuebles"} className="back">
          <i className="fi-rr-arrow-left"></i>
          <h1>Volver</h1>
        </Link>
      </div>
      <div className="main_title">
        <h1>Publicar un Inmueble</h1>
        <i className="fi-rr-square-info"></i>
      </div>

      <form className="form-box">
        <div className="form-images">
          <h2>Fotos</h2>
          <div className="images">
            <div className="image image1">
              <input type="file" id="file" />
              <label for="file">
                <i className="fi-rr-plus"></i>
              </label>
            </div>

            <div className="image image2">
              <input type="file" id="file" />
              <label for="file">
                <i className="fi-rr-plus"></i>
              </label>
            </div>

            <div className="image image3">
              <input type="file" id="file" />
              <label for="file">
                <i className="fi-rr-plus"></i>
              </label>
            </div>

            <div className="image image4">
              <input type="file" id="file" />
              <label for="file">
                <i className="fi-rr-plus"></i>
              </label>
            </div>

            <div className="image image5">
              <input type="file" id="file" />
              <label for="file">
                <i className="fi-rr-plus"></i>
              </label>
            </div>
          </div>
        </div>
        <div className="form-location">
          <h2>Ubicación</h2>
          <div className="search_box">
            <div className="search_bar">
              <input
                type="text"
                name="search_bar"
                id="search_bar"
                placeholder="Buscar la dirección del inmueble"
              />
              <i className="fi-rr-search"></i>
            </div>

            <h2>Tags</h2>
            <div className="search_bar_tags">
              <input
                type="text"
                name="search_tag"
                id="search_tag"
                placeholder="Escribe una palabra clave"
              />
              <i className="fi-rr-search"></i>
            </div>
            <div className="tag-list">
              <div className="tag">Bogotá <i className="fi-rr-cross-small"></i></div>
              <div className="tag">Departamento <i className="fi-rr-cross-small"></i></div>
              <div className="tag">Nuevo <i className="fi-rr-cross-small"></i></div>
            </div>
          </div>

          <div className="map"></div>
        </div>

        <div className="form-details">
            <h2>Datos Generales</h2>
            <div className="detail-input">
                <label for="title">Título</label>
                <input type="text" name="title" id="title" placeholder="Escribe un título para tu inmueble"/>
            </div>
            <div className="detail-input">
                <label for="property-type">Tipo de inmueble</label>
                <select name="property-type" id="">
                    <option value="apartamento">Apartamento</option>
                    <option value="casa">Casa</option>
                    <option value="oficina">Oficina</option>
                    <option value="local">Local</option>
                    <option value="lote">Lote</option>
                </select>
            </div>

            <div className="detail-input">
                <label for="sale-type">Garaje</label>
                <select name="sale-type" id="sale-type">
                    <option value="sale">Vender</option>
                    <option value="rent">Arrendar</option>
                </select>
            </div>

            <div className="detail-input">
                <label for="total-area">Area</label>
                <input type="number" name="total-area" id="total-area" placeholder="Escribe el área total"/>
            </div>
            <div className="detail-input">
                <label for="build-area">Area Construida</label>
                <input type="number" name="build-area" id="build-area" placeholder="Escribe el área total construida"/>
            </div>
            <div className="detail-input">
                <label for="rooms">Habitaciones</label>
                <input type="number" name="rooms" id="rooms" placeholder="Escribe el número de habitaciones"/>
            </div>
            <div className="detail-input">
                <label for="bathrooms">Baños</label>
                <input type="number" name="bathrooms" id="bathrooms" placeholder="Escribe el número de baños"/>
            </div>
            <div className="detail-input">
                <label for="garage">Garaje</label>
                <input type="number" name="garage" id="garage" placeholder="Escribe el número de garajes"/>
            </div>

            <div className="detail-input">
                <label for="description">Descripción</label>
                <input type="text" name="description" id="description" placeholder="Breve descripción"/>
            </div>  

            <div className="detail-input">
                <label for="price">Precio</label>
                <input type="number" name="price" id="price" placeholder="Escribe el precio"/>
            </div>    

        </div>
      </form>
    </div>
  );
}
