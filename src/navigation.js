import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="container">
            <h2>Labs</h2>
            <div><Link to="/labs/a3/">A3 - REACT + ROUTER</Link></div>
            <div><Link to="/labs/a4/">A4 - STATE + REDUX</Link></div>
            <div><Link to="/labs/a5/">A5 - NODE + REST + APIs</Link></div>
            <h2>Kanbas</h2>
            <div><Link to="/Kanbas">Kanbas</Link></div>
            <h2>Project</h2>
            <div><Link to="/project">Project</Link></div>
        </div>
    );
}

export default Navigation;