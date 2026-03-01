import React from "react";
import { NavLink } from "react-router";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ background: "#2f3e52", color: "#fff", padding: "40px 0 20px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "auto", padding: "0 20px" }}>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "30px" }}>
          
          {/* Left */}
          <div style={{ flex: "1", minWidth: "250px" }}>
            <img src="/logo.png" alt="logo" style={{ width: "60px" }} />
            <p>"শিক্ষার নিয়ে গড় দেশ লাল সবুজের বাংলাদেশ"</p>

            
          </div>

          {/* Quick Links with NavLink */}
          <div style={{ flex: "1", minWidth: "200px" }}>
            <h4>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              
              <li>
                <NavLink to="/" style={linkStyle}>Home</NavLink>
              </li>

              <li>
                <NavLink to="/" style={linkStyle}>About Us</NavLink>
              </li>

              <li>
                <NavLink to="/contact" style={linkStyle}>Contact Us</NavLink>
              </li>

              <li>
                <NavLink to="/admission" style={linkStyle}>Admission</NavLink>
              </li>

              <li>
                <NavLink to="/notices" style={linkStyle}>Notices</NavLink>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div style={{ flex: "1", minWidth: "250px" }}>
            <h4>Contact Us</h4>
            <p><FaMapMarkerAlt /> সিলেট </p>
            <p><FaPhoneAlt /> 01711273586</p>
            <p><FaEnvelope /> sfhhs@gmail.com</p>
          </div>

        </div>

        <hr style={{ borderColor: "#44566c", margin: "20px 0" }} />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>© 2026 Syeda Farhana Hussain High School. All rights reserved.</p>
          <p>Developed by Mizanur rahman asif</p>
        </div>

      </div>
    </footer>
  );
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  display: "block",
  margin: "6px 0"
};

export default Footer;