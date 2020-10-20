import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark davbar-expand-lg">
                <Link to="/" className="navbar-brand">Excersice Tracker</Link>
                <div className="collpase navbar-collpase ">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="navbar-item"><Link to="/create" className="nav-link">Create Excersice</Link></li>
                        <li className="navbar-item"><Link to="/user" className="nav-link">Create User</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
