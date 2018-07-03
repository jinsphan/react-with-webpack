import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/info" >Info</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;