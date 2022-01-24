import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <input className='homesearch' type="text" placeholder="Search" />
                <i style={{ color: "black" }} className="fas fa-search searchbtn"></i>
            </div>
            <div className="videos">
                <div style={{ marginLeft: "30px", marginTop: "50px" }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zogEvLuF1Es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4 style={{ color: "black" }}>Learn Chinese in 30 Minutes - ALL the Basics You Need
                    </h4>
                    <Link style={{ textDecoration: "none" }} to='/auther'>
                        <h5 style={{ color: "black" }}>
                            Auther: Learn Chinese with learnchinese101.com
                        </h5>
                    </Link>
                    <div className="views">
                        <div>
                            <p style={{ color: "black" }}>1years ago</p>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: "30px", marginTop: "50px" }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4lg9BXL2RI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4 style={{ color: "black" }}>Learn Chinese in 30 Minutes - ALL the Basics You Need
                    </h4>
                    <Link style={{ textDecoration: "none" }} to='/auther'>
                        <h5 style={{ color: "black" }}>
                            Auther: Learn Chinese with learnchinese101.com
                        </h5>
                    </Link>
                    <div className="views">
                        <div>
                            <p style={{ color: "black" }}>1years ago</p>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: "30px", marginTop: "50px" }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yxf0Op1K3gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4 style={{ color: "black" }}>Learn Chinese in 30 Minutes - ALL the Basics You Need
                    </h4>
                    <Link style={{ textDecoration: "none" }} to='/auther'>
                        <h5 style={{ color: "black" }}>
                            Auther: Learn Chinese with learnchinese101.com
                        </h5>
                    </Link>
                    <div className="views">
                        <div>
                            <p style={{ color: "black" }}>1years ago</p>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: "30px", marginTop: "50px" }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/iOJVTU67E3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4 style={{ color: "black" }}>Learn Chinese in 30 Minutes - ALL the Basics You Need
                    </h4>
                    <Link style={{ textDecoration: "none" }} to='/auther'>
                        <h5 style={{ color: "black" }}>
                            Auther: Learn Chinese with learnchinese101.com
                        </h5>
                    </Link>
                    <div className="views">
                        <div>
                            <p style={{ color: "black" }}>1years ago</p>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: "30px", marginTop: "50px" }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CopUpYw3Spw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4 style={{ color: "black" }}>Learn Chinese in 30 Minutes - ALL the Basics You Need
                    </h4>
                    <Link style={{ textDecoration: "none" }} to='/auther'>
                        <h5 style={{ color: "black" }}>
                            Auther: Learn Chinese with learnchinese101.com
                        </h5>
                    </Link>
                    <div className="views">
                        <div>
                            <p style={{ color: "black" }}>1years ago</p>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: "30px", marginTop: "50px" }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6DjWhxbzXxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4 style={{ color: "black" }}>Learn Chinese in 30 Minutes - ALL the Basics You Need
                    </h4>
                    <Link style={{ textDecoration: "none" }} to='/auther'>
                        <h5 style={{ color: "black" }}>
                            Auther: Learn Chinese with learnchinese101.com
                        </h5>
                    </Link>
                    <div className="views">
                        <div>
                            <p style={{ color: "black" }}>1years ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;