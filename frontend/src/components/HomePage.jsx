import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./HomePage.css";
import searchLogo from "../assets/Search2.svg";
import friend from "../assets/friends.svg";
import multilan from "../assets/multilingual.svg"
import all from "../assets/AllInOne.svg"
import local from "../assets/local.svg"
import Card1 from "./Card1";

export const HomePage = () => {
    return (
        <div className="HomePage">
            {/* <Navbar /> */}
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
            <div className="bookings">
                <div className="travels">
                    <h3 className="title">Book Your Travels</h3>
                    <button>Book now</button>
                </div>
                <div className="hotels">
                    <h3 className="title">Book Your Stays</h3>
                    <button>Book Now</button>
                </div>
            </div>
            <div className="features">
                <h2>Key Features</h2>
                <div className="container">
                <div className="feature">
                        <div className="title"> <img src={all} alt="" />All-In-One </div>
                        <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, beatae!</p>
                    </div>
                    <div className="feature">
                        <div className="title"> <img src={friend} alt="" />Friend Making</div>
                        <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, beatae!</p>
                    </div>
                    <div className="feature">
                        <div className="title"> <img src={multilan} alt="" />Multilingual Support</div>
                        <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, beatae!</p>
                    </div>
                    <div className="feature">
                        <div className="title"><img src={local} alt="" />Local Mentor</div>
                        <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, beatae!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
