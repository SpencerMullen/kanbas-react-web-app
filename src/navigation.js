import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="container">
            <h2>Labs</h2>
            <Link to="/labs/a3/">A3 - REACT + ROUTER</Link>
            <h2>Kanbas</h2>
            <Link to="/Kanbas">Kanbas</Link>
        </div>
    );
}

export default Navigation;