import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function Nav () {
    const { pathname } = useLocation();
    const links = ["Home", "Search", "Signin", "Signup", "Account"];
    return (
        <div className="list-group navBar" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Project/${link}`}
                    className={`list-group-item navBarItem ${pathname.includes(link) && "active"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}