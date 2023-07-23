import "./FooterStyle.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="left-section">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Village: Reotipur</p>
                            <p>District: Ghazipur</p>
                            <p>State: Uttar Pradesh</p>
                            <p>Country: India</p>
                        </div>
                    </div>
                    <div className="location">
                        <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <h4>+91-xxxxxx0111</h4>
                        </div>
                    </div>
                    <div className="location">
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <h4>xyzinfo@gmail.com</h4>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <h4>About Me!</h4>
                    <p>This website is designed in react framework. This is just created for learning purpose and gaining the knowledge in UI development with new technology.</p>
                    <div className="socialPlatform">
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
