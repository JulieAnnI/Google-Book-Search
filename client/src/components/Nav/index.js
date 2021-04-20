
import React from "react";
import {Link, useLocation } from "react-router-dom";


function Nav() {

    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" || location.pathname === "/search"|| location.pathname === "/search/" ? "nav-link active" : "nav-link"}>
                    Search
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/portfolio" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                    Saved
                </Link>
            </li>
      </ul>
    );
}

export default Nav;