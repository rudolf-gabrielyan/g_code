import React from 'react';
import { Link } from 'react-router-dom';
import '../../Scss/Guest/GuestHeader.scss'


const GuestHeader = () => {
    return (
        <>
            <div id="header">
                <div className="container">

                <div id="logo" className="pull-left">
                    <h1><Link to="#" className="scrollto">Avilon</Link></h1>
                </div>

                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                    <li className="menu-active"><Link to="#">Home</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Features</Link></li>
                    <li><Link to="#">Pricing</Link></li>
                    <li><Link to="#">Team</Link></li>
                    <li><Link to="#">Gallery</Link></li>
                    <li className="menu-has-children"><Link to="#">Drop Down</Link>
                        <ul>
                        <li><Link to="#">Drop Down 1</Link></li>
                        <li className="menu-has-children"><Link to="#">Drop Down 2</Link>
                            <ul>
                            <li><Link to="#">Deep Drop Down 1</Link></li>
                            <li><Link to="#">Deep Drop Down 2</Link></li>
                            <li><Link to="#">Deep Drop Down 3</Link></li>
                            <li><Link to="#">Deep Drop Down 4</Link></li>
                            <li><Link to="#">Deep Drop Down 5</Link></li>
                            </ul>
                        </li>
                        <li><Link to="#">Drop Down 3</Link></li>
                        <li><Link to="#">Drop Down 4</Link></li>
                        <li><Link to="#">Drop Down 5</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#">Contact Us</Link></li>
                    </ul>
                </nav>
                </div>
            </div>
        </>
    )
}

export default GuestHeader;