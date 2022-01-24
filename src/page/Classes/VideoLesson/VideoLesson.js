import React from 'react';
import './VideoLesson.css'

const VideoLesson = () => {
    return (
        <div className='div-container'>
            <div>
                <div className="videolessons">
                    <h2>Chinese language for beginners : Mandarin Chinese HSK1-HSK3</h2>
                    <h6>Learn Chinese language : Focus on active learning and practical Mandarin Chinese : Chinese for beginners : HSK1 to HSK3</h6>
                    <div className='ratings'>
                        <div>
                            <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                            <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                            <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                            <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                            <i style={{ color: "darkorange" }} className="far fa-star"></i>
                        </div>
                        <div>
                            <p style={{ marginLeft: "5px" }}>(2,109 ratings)</p>
                        </div>
                        <div>
                            <p style={{ marginLeft: "5px" }}>14,070 students</p>
                        </div>
                    </div>
                    <div className="created">
                        <div>
                            <h5>Created by</h5>
                        </div>
                        <div>
                            <h5 style={{ marginLeft: "5px" }}>Edwin</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-topic">
                <iframe width="340" height="191" src="https://www.youtube.com/embed/zogEvLuF1Es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h2 style={{ coor: "#1C1D1F", textAlign: "center", fontSize: "40px" }}>$84.99</h2>
                <div className="addtocart">
                    <div >
                        <button className='addtocartbtn'>Add to Cart</button>
                    </div>
                    <div>
                        <i className="fas fa-cart-plus cart"></i>
                    </div>
                </div>
                <button className='purchasenowbtn'>Purchase Now</button>
                <div>
                    <h4 style={{ marginLeft: "5px", color: "black", marginTop: "20px" }}>This Course Includes :</h4>
                    <div className='allincludes'>
                        <div className='videoincludes'>
                            <div>
                                <i className="fas fa-video"></i>
                            </div>
                            <div>
                                <h6 style={{ marginLeft: "5px" }}>25.5 hours on-demand video</h6>
                            </div>
                        </div>
                        <div className='videoincludes'>
                            <div>
                                <i className="fas fa-newspaper"></i>
                            </div>
                            <div>
                                <h6 style={{ marginLeft: "5px" }}>26 articles</h6>
                            </div>
                        </div>
                        <div className='videoincludes'>
                            <div>
                                <i className="fas fa-download"></i>
                            </div>
                            <div>
                                <h6 style={{ marginLeft: "5px" }}>76 downloadable resources</h6>
                            </div>
                        </div>
                        <div className='videoincludes'>
                            <div>
                                <i className="fas fa-infinity"></i>
                            </div>
                            <div>
                                <h6 style={{ marginLeft: "5px" }}>Full lifetime access</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="learning">
                <h2 style={{ margin: "15px" }}>What you'll learn</h2>
                <div className='outcomes'>
                    <div className='learingoutcome'>
                        <div>
                            <i style={{ marginLeft: "5px" }} className="fas fa-hand-point-right"></i>
                        </div>
                        <div>
                            <h6 style={{ marginLeft: "5px" }}>Learn common used Chinese language words and sentences</h6>
                        </div>
                    </div>
                    <div className='learingoutcome'>
                        <div>
                            <i className="fas fa-hand-point-right"></i>
                        </div>
                        <div>
                            <h6 style={{ marginLeft: "5px" }}>Learn common used Chinese language words and sentences</h6>
                        </div>
                    </div>
                </div>
                <div className='outcomes'>
                    <div className='learingoutcome'>
                        <div>
                            <i style={{ marginLeft: "5px" }} className="fas fa-hand-point-right"></i>
                        </div>
                        <div>
                            <h6 style={{ marginLeft: "5px" }}>Learn common used Chinese language words and sentences</h6>
                        </div>
                    </div>
                    <div className='learingoutcome'>
                        <div>
                            <i className="fas fa-hand-point-right"></i>
                        </div>
                        <div>
                            <h6 style={{ marginLeft: "5px" }}>Learn common used Chinese language words and sentences</h6>
                        </div>
                    </div>
                </div>
                <div className='outcomes'>
                    <div className='learingoutcome'>
                        <div>
                            <i style={{ marginLeft: "5px" }} className="fas fa-hand-point-right"></i>
                        </div>
                        <div>
                            <h6 style={{ marginLeft: "5px" }}>Learn common used Chinese language words and sentences</h6>
                        </div>
                    </div>
                    <div className='learingoutcome'>
                        <div>
                            <i className="fas fa-hand-point-right"></i>
                        </div>
                        <div>
                            <h6 style={{ marginLeft: "5px" }}>Learn common used Chinese language words and sentences</h6>
                        </div>
                    </div>
                </div>
                <div className='outcomes'>
                    <div className='learingoutcome'>
                        <div>
                            <i style={{ marginLeft: "5px" }} className="fas fa-hand-point-right"></i>
                        </div>
                        <div>
                            <h6 style={{ marginLeft: "5px" }}>Learn common used Chinese language words and sentences</h6>
                        </div>
                    </div>
                    <div className='learingoutcome'>
                        <div>
                            <i className="fas fa-hand-point-right"></i>
                        </div>
                        <div>
                            <h6 style={{ marginLeft: "5px" }}>Learn common used Chinese language words and sentences</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoLesson;