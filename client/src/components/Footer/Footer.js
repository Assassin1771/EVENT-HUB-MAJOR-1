import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import './Footer.css';
import vd from "./void.png";



const Footer = () => {
    return (
        <div class="d-flex flex-column min-vh-100 xyz">
        <br/>  <br/> <br/>
        
        <footer class="footer-distributed mt-auto">
            <div class="footer-left">
            <img
        src={vd}
        style={{height:"1cm"}}
        alt="Third slide"
      />
   
                        <p class="footer-links">

                        <Link to="/home" class="link-1">Upcoming Contests</Link>
                            
                            <Link to="/about">About</Link>  
                            
                            <Link to="/contact">Contact</Link>
                            <Link to="/analytics">Analytics</Link>
                            
                        </p>

        
                        <p class="footer-company-name">VOIDL © 2022</p>
                    </div>
        
                    <div class="footer-center">
        
                        <div>
                            <i class="fa fa-map-marker"></i>
                            <p><span>Jaypee Institute Of Information Technology</span> Sector 62,Noida ,India</p>
                        </div>
        
                        <div>
                            <i class="fa fa-phone"></i>
                            <p>+91 7668150810</p>
                        </div>
                        <div>
                            <i class="fa fa-envelope"></i>
                            <p>Tech: <a href="mailto:support@company.com">support@company.com</a><br/>
                            Query: <a href="mailto:support@company.com">support@company.com</a><br/>
                            Helpline: <a href="mailto:support@company.com">support@company.com</a></p>
                        </div>
                    </div>
        
                    <div class="footer-right">
        
                        <p class="footer-company-about">
                            <span>About the Website</span>
                            Event Hub is a one stop destinaton for all programmers and workng professionals to keep track of events taking place on any platform                        </p>

                        <div class="footer-icons">
        
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-github"></i></a>
        
                        </div>
        
                    </div>
                </footer>
                </div>
               
    );
  };
  
  export default Footer;
  
