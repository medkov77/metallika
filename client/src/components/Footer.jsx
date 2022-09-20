import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-inner">
                        <FaRegEnvelope className="icon"/>
                        metallika-2017@mail.ru</div>
                    <div className="footer-inner">
                        <FaPhone className="icon"/>
                        +7-495-777-27-27</div>
                </div>
            </div>
        </footer>    
    )
    
}