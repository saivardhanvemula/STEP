import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState("Home");
    const handleLinkClick = (link) => {
        setActiveLink(link);
        if(link=="Home") navigate("/");
        else navigate(`/${link.toLowerCase()}`)
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
                        activeLink === "Trip" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Trip")}
                >
                    Trip
                </span>
                <span
                    className={`links ${
                        activeLink === "Travels" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Travels")}
                >
                    Travels
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
                        activeLink === "Support" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Support")}
                >
                    Support
                </span>
                <span
                    className={`links ${
                        activeLink === "Friend" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Friend")}
                >
                    Make a Friend
                </span>
                <span
                    className={`links ${
                        activeLink === "LogIn" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("LogIn")}
                >
                    SignIn/LogIn
                </span>
            </div>
        </div>
    );
};

export default Navbar;
