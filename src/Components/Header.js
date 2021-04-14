import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark sticky-top">
                    <div className="container">
                        <Link to='/' className="navbar-brand">
                            <img src='logo.png' alt="AFL Fanatics" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/matches" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">MATCHES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/teams" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">TEAMS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/tips" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">TIPS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/standings" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">STANDINGS</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
