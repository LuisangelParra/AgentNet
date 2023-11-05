import React, { useState } from "react";
import "./top-bar.css";

export function TopBar() {
  return (
    <div className="nav-bar">
      <div className="right-nav-bar">
        <ul>
          <li>
            <a className="notify" href="#">
              <i className="fi-rr-bell"></i>
            </a>
          </li>
          <li>
            <a className="username" href="#">
              <h3>Luisangel</h3>
            </a>
          </li>
          <li>
            <a className="userimg" href="#">
              <i className="fi-rr-portrait"></i>
            </a>
          </li>
          <li>
            <a className="menu" href="#">
              <i className="fi-rr-menu-burger"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
