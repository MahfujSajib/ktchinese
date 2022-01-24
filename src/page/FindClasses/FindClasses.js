import React from 'react';
import { Link } from 'react-router-dom';
import './FindClasses.css'

const FindClasses = () => {
    return (
        <div>

            {/* SEARCH BAR START */}
            <input className='classessearch' type="text" placeholder="Search Classes" />
            <i style={{ color: "black" }} className="fas fa-search searchclassesbtn"></i>
            {/* <div className='search'>
                <div>
                    <input className='search bar' type="text" placeholder="Filter Classes" />
                </div>
                <div>
                    <input className='search bar' type="text" placeholder="Select Tutor" />
                </div>
                <div>
                    <input className='search bar' type="text" placeholder="Select Time" />
                </div>
            </div> */}
            {/* SEARCH BAR END */}
            <div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col">
                            <iframe style={{ marginTop: "50px" }} width="560" height="315" src="https://www.youtube.com/embed/QOpQf3fi2N4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div style={{ marginLeft: "50px", marginTop: "100px" }} className="col">
                            <h6>Ages 6-10</h6>
                            <h5 style={{ color: "black" }}>Children’s Drawing Lesson With a Theme Story (Teaching in Mandarin)
                                主题故事儿童绘画课</h5>
                            <p>Children’s Drawing Lesson With a Theme Story (Teaching in Mandarin)
                                主题故事儿童绘画课</p>
                            <p style={{ color: "black" }}>Jenny (Xiaojing Jiang) 江老师</p>
                            <div style={{ marginTop: "10px" }}>
                                <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                <i style={{ color: "darkorange" }} className="far fa-star"></i>
                            </div>
                            <p style={{ color: "black", marginTop: "10px" }}>Thu Jan 20, 6:30-7:10am,+38 more times</p>
                        </div>
                        <div style={{ marginLeft: "100px", marginTop: "100px" }} className="col classtype">
                            <h4 style={{ color: "black" }}>Class Type: Group class page</h4>

                            <h5 style={{ color: "black", marginTop: "18px" }}>$70</h5>
                            {/* <button className='button'>Purchase Now</button> */}
                            <Link to='/groupclass'>
                                <button className='button'>Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr style={{ color: "black", marginLeft: "60px", marginRight: "60px" }} />
                <div className="container">
                    <div className="row g-5">
                        <div className="col">
                            <iframe style={{ marginTop: "50px" }} width="560" height="315" src="https://www.youtube.com/embed/6DjWhxbzXxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div style={{ marginLeft: "50px", marginTop: "100px" }} className="col">
                            <h6>Ages 6-10</h6>
                            <h5 style={{ color: "black" }}>Children’s Drawing Lesson With a Theme Story (Teaching in Mandarin)
                                主题故事儿童绘画课</h5>
                            <p>Children’s Drawing Lesson With a Theme Story (Teaching in Mandarin)
                                主题故事儿童绘画课</p>
                            <p style={{ color: "black" }}>Jenny (Xiaojing Jiang) 江老师</p>
                            <div style={{ marginTop: "10px" }}>
                                <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                <i style={{ color: "darkorange" }} className="far fa-star"></i>
                            </div>
                            <p style={{ color: "black", marginTop: "10px" }}>Thu Jan 20, 6:30-7:10am,+38 more times</p>
                        </div>
                        <div style={{ marginLeft: "100px", marginTop: "100px" }} className="col classtype">
                            <h4 style={{ color: "black" }}>Class Type: 1 vs 1s</h4>
                            <h5 style={{ color: "black", marginTop: "18px" }}>$70</h5>
                            <Link to="/onetoone">
                                <button className='button'>Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr style={{ color: "black", marginLeft: "60px", marginRight: "60px" }} />
                <div className="container">
                    <div className="row g-5">
                        <div className="col">
                            <iframe style={{ marginTop: "50px" }} width="560" height="315" src="https://www.youtube.com/embed/6DjWhxbzXxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div style={{ marginLeft: "50px", marginTop: "100px" }} className="col">
                            <h6>Ages 6-10</h6>
                            <h5 style={{ color: "black" }}>Children’s Drawing Lesson With a Theme Story (Teaching in Mandarin)
                                主题故事儿童绘画课</h5>
                            <p>Children’s Drawing Lesson With a Theme Story (Teaching in Mandarin)
                                主题故事儿童绘画课</p>
                            <p style={{ color: "black" }}>Jenny (Xiaojing Jiang) 江老师</p>
                            <div style={{ marginTop: "10px" }}>
                                <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                                <i style={{ color: "darkorange" }} className="far fa-star"></i>
                            </div>
                            <p style={{ color: "black", marginTop: "10px" }}>Thu Jan 20, 6:30-7:10am,+38 more times</p>
                        </div>
                        <div style={{ marginLeft: "100px", marginTop: "100px" }} className="col classtype">
                            <h4 style={{ color: "black" }}>3. Class Type: Video Lessons Page</h4>
                            <h5 style={{ color: "black", marginTop: "18px" }}>$70</h5>
                            <Link to="/videolesson">
                                <button className='button'>Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindClasses;