import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Add from "./add";

function PathParameters() {
    return (
        <div>
            <h2>Path Parameters</h2>
            <Link to="/labs/a3/add/1/2">1 + 2</Link> <br />
            <Link to="/labs/a3/add/3/4">3 + 4</Link>
            <Routes>
                <Route path="/labs/a3/add/:a/:b" element={<Add />} />
            </Routes>
        </div>
    );
}

export default PathParameters;