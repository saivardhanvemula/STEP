import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./HomePage.css"
import searchLogo from "../assets/Search2.svg";
import Card1 from "./Card1";

export const HomePage = () => {
    return (
        <div className="HomePage">
            <Navbar />
            <div className="quote">The Whole World awaits</div>
            <div className="search">
                <img src={searchLogo} alt="" />
                <input type="text" placeholder="Search Destinations" />
                <button>Search</button>
            </div>
            <div className="topDestinations">
                Top Destinations
                <div className="cards">
                    <Card1
                        title="Germany"
                        imageUrl="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <Card1
                        title="Beach"
                        imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <Card1
                        title="Mountain Adventure"
                        imageUrl="/assets/mountains.jpg"
                    />
                    <Card1
                        title="Beach"
                        imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <Card1
                        title="Mountain Adventure"
                        imageUrl="/assets/mountains.jpg"
                    />
                    <Card1
                        title="Beach"
                        imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <Card1
                        title="Mountain Adventure"
                        imageUrl="/assets/mountains.jpg"
                    />
                    <Card1
                        title="Beach"
                        imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <Card1
                        title="Mountain Adventure"
                        imageUrl="/assets/mountains.jpg"
                    />
                    <Card1
                        title="Beach"
                        imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <Card1
                        title="Mountain Adventure"
                        imageUrl="/assets/mountains.jpg"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};
