import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("Home");
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="nav">
            <div className="name">Trip Planner</div>
            <div className="navlinks">
                <span
                    className={`links ${activeLink === "Home" ? "active" : ""}`}
                    onClick={() => handleLinkClick("Home")}
                >
                    Home
                </span>
                <span
                    className={`links ${
                        activeLink === "Stays" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Stays")}
                >
                    Stays
                </span>
                <span
                    className={`links ${
                        activeLink === "Flights" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Flights")}
                >
                    Flights
                </span>
                <span
                    className={`links ${
                        activeLink === "Packages" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Packages")}
                >
                    Packages
                </span>
                <span
                    className={`links ${
                        activeLink === "SignIn/LogIn" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("SignIn/LogIn")}
                >
                    SignIn/LogIn
                </span>
            </div>
        </div>
    );
};

export default Navbar;
