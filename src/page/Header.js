import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='navbar'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a style={{ color: "red", fontSize: "40px" }} className="navbar-brand" href="#">K.T CHINESE LOGO</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse navbar-ul" id="navbarNav">
                            <ul className="navbar-nav margin-left">
                                <li className="nav-item">
                                    <Link className='navlink' to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='navlink' to="/findclasses">Find Classes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='navlink' to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='navlink' to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;