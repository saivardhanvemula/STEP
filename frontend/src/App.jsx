import "./App.css";
import { useState } from "react";
import { HomePage } from "./components/HomePage";
import LogIn from "./components/LogIn";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Support from "./components/Support";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
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
                    <Route path="/trip" element={<LogIn />} />
                    <Route path="/travels" element={<LogIn />} />
                    <Route path="/stays" element={<LogIn />} />
                    <Route path="/support" element={<Support/>} />
                </Routes>
                {/* <Footer /> */}
            </div>
        </Router>
    );
}

export default App;
