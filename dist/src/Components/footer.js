import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './../css/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import apple from "./../image/apple.png";
import microsoft from "./../image/microsoft.png";
import google from "./../image/google.png";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
export default class footer extends Component {
    render() {
        return (
            <>
            <div id="footer">
                <div id="footer-inner">
                    <div id="links">
                    <ul>
                        <li>
                        <NavLink className= "navLink1"  exact activeClassName= "active_class" to="/">Home    |</NavLink>
                        </li>
                        <li>
                        <NavLink className= "navLink1"  exact activeClassName= "active_class" to="/">Terms and Condition    |</NavLink>
                        </li>
                        <li>
                        <NavLink className= "navLink1"  exact activeClassName= "active_class" to="/">Privacy Policy    |</NavLink>
                        </li>
                        <li>
                        <NavLink className= "navLink1"  exact activeClassName= "active_class" to="/">Collection Statement    |</NavLink>
                        </li>
                        <li>
                        <NavLink className= "navLink1"  exact activeClassName= "active_class" to="/">Help    |</NavLink>
                        </li>
                        <li>
                        <NavLink className= "navLink1"  exact activeClassName= "active_class" to="/">Manage Account    |</NavLink>
                        </li>
                    </ul>
                    <p>Copyright @ 2016 DEMO Streaming. All Rights Reserved.</p>
                    </div>
                    <div id="social-links">
                        <ul>
                            <li><a href="https://www.facebook.com/learnbuildteach/" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                            <li><a href="https://www.twitter.com/jamesqquick" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
                            <li><a href="https://www.instagram.com/learnbuildteach"className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
                            <li><a href="#"><img src={apple}/></a></li>
                            <li><a href="#"><img src={microsoft}/></a></li>
                            <li><a href="#"><img src={google}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
                
            </>
        )
    }
}
