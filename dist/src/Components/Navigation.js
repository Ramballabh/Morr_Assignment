import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './../css/Navigation.css'
export default class Navigation extends Component {
    render() {
        return (
            <>
                <div id="Nav">
                    <h1>DEMO Streaming</h1>
                    <ul>
                        <li>
                        <NavLink className= "navLink"  exact activeClassName= "active_class" to="/">Login</NavLink>
                        </li>
                        <li>
                        <NavLink className= "navLink"  exact activeClassName= "active_class" to="/">Start your free trial Today</NavLink>
                        </li>
                    </ul>
                </div>
                <div id="Nav1">
                    <h2>Popular Titles</h2>
                </div>
            </>
        )
    }
}
