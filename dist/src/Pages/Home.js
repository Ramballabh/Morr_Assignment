import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import './../css/home.css';
import movies from './../image/Movies.png';
import Series from './../image/Series.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className = "main-content">
                    <div className= "card">
                    <NavLink className= "seriesLink"  exact activeClassName= "active_class" to="/Movies"><img src={Series} /></NavLink><br></br>
                    Popular Series
                    </div>
                    <div className = "card">
                    <NavLink className= "movieLink"  exact activeClassName= "active_class" to="/Series"><img src={movies} /></NavLink><br></br>
                    Popular Movies
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
