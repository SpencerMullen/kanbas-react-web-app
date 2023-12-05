import { Link, useLocation } from "react-router-dom";
import React from "react";
// Import react icons from react-icons
import { FaUserAlt, FaTachometerAlt, FaBook, FaCalendarAlt } from "react-icons/fa";
import "./index.css";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar"];
    // Account icon, dashboard icon, courses icon, and calendar icon from react-icons
    const icons = [<FaUserAlt className="navIcon" />, <FaTachometerAlt className="navIcon" />, <FaBook className="navIcon" />, <FaCalendarAlt className="navIcon" />];
    const { pathname } = useLocation();
    return (
        <div className="list-group navBar" style={{ width: 150 }}>
            {links.map((link, index) => (
                <div>
                    {icons[index]}
                    <Link
                        key={index}
                        to={`/Kanbas/${link}`}
                        className={`list-group-item navBarItem ${pathname.includes(link) && "active"}`}>
                        {link}
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default KanbasNavigation;