import React from 'react';
import './AutherPort.css'

const AutherPort = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='auther-profile'>
                            <div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/6FLHLwQqiXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                            </div>
                            <div>
                                <p style={{ color: "black", fontSize: "25px", marginTop: "20px" }}>
                                    Hello everyone, my name is XXX. i have 8 years exprience in Chinese lanauge

                                </p>
                            </div>
                            <div>
                                <h2 style={{ textAlign: "center", marginTop: "100px", color: "black" }}>Join My Classes</h2>
                                <hr style={{ color: "black" }} />
                            </div>
                            <div className="myclasses">
                                <div>
                                    <iframe width="350" height="350" src="https://www.youtube.com/embed/6FLHLwQqiXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                    </iframe>
                                    <div>
                                        <h2 style={{ color: "black", fontSize: "20px" }}>Class Type: VIP 1 on 1</h2>
                                        <div>
                                            <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                            <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                            <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                            <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                            <i style={{ color: "darkorange" }} className="far fa-star"></i>
                                        </div>
                                        <h4 style={{ color: "black" }}>$45</h4>
                                        <button className='book-btn'>Book Now</button>
                                    </div>
                                </div>
                                <div>
                                    <iframe width="350" height="350" src="https://www.youtube.com/embed/6FLHLwQqiXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                    </iframe>
                                    <div>
                                        <h2 style={{ color: "black", fontSize: "20px" }}>Class type:  20 Video lessons</h2>
                                        <div>
                                            <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                            <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                            <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                            <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                            <i style={{ color: "darkorange" }} className="far fa-star"></i>
                                        </div>
                                        <h4 style={{ color: "black" }}>$30</h4>
                                        <button className='book-btn'>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col related">
                        <h2 style={{ color: "black" }}>related videos</h2>
                        <hr style={{ color: "black" }} />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6FLHLwQqiXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6FLHLwQqiXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6FLHLwQqiXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutherPort;
