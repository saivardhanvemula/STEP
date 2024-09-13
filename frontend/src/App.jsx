import "./App.css";
import { useState } from "react";
import { HomePage } from "./components/HomePage";
import LogIn from "./components/LogIn";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const [activeLink, setActiveLink] = useState("Home");
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    return (
        <Router>
            <div
                className="page"
                style={{ backgroundImage: `url("./assets/mountains.jpg")` }}
            >
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LogIn />} />
                </Routes>
                {/* <Footer /> */}
            </div>
        </Router>
    );
}

export default App;
