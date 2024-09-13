import React from "react";
import "./Support.css";

const Support = () => {
    return (
        <div className="support">
            <div className="page-container">
                <div className="chat-container">
                    <h2 className="chat-title">Live Chat</h2>
                    <div className="chat-box">
                        <div className="message message-left">
                            <div className="avatar"></div>
                            <div className="message-bubble">Hello</div>
                        </div>
                        <div className="message message-right">
                            <div className="message-bubble">hi</div>
                            <div className="avatar"></div>
                        </div>
                    </div>
                    <div className="chat-input">
                        <input type="text" placeholder="Some text ..." />
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
