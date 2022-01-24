
import img2 from '../../../images/group.jpg';
import tutor from '../../../images/oneonetutor.jpg';
import './GroupClass.css'

const GroupClass = () => {
    return (
        <div>
            <div>
                <h3 className='oneoneheading'>Group Class</h3>
            </div>
            <div className="containerone">
                <div className="learnmore">
                    <h5 style={{ marginTop: "10px" }}>This is an intro one on one class. Each lesson will be personalized to the specific needs. (ESL students are welcome to join for English tutoring.)</h5>
                    <div className='tutor-name'>
                        <div>
                            <img style={{ borderRadius: "20px" }} width="30px" height="30px" src={tutor} alt="" />
                        </div>
                        <div>
                            <h6 style={{ marginTop: "10px", marginLeft: "10px" }}>Ms Chen</h6>
                        </div>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                        <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                        <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                        <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                        <i style={{ color: "darkorange" }} className="far fa-star"></i>
                        <p>25 total reviews for this teacher</p>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                        <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                        <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                        <i style={{ color: "darkorange" }} className="fas fa-star"></i>
                        <i style={{ color: "darkorange" }} className="far fa-star"></i>
                        <p>3 reviews for this class</p>
                        <p>Completed by 7 learners</p>
                    </div>
                    <button className='purchasebtn'>Schedule Now</button>
                </div>
                <div className="oneoneimg">
                    <img className='img2' src={img2} alt="" />
                </div>
            </div>
            <div className='time'>
                <div className="classtime">
                    <div style={{ marginLeft: "20px" }}>
                        <div className='timing'>
                            <div>
                                <i className="far fa-clock clock"></i>
                            </div>
                            <div>
                                <h4 style={{ marginLeft: "10px", marginTop: "5px" }}>30 minutes per class</h4>
                            </div>
                        </div>
                        <div className="learner">
                            <div>
                                <i class="fas fa-users users"></i>
                            </div>
                            <div>
                                <h4 style={{ marginLeft: "20px", marginTop: "5px" }}>1 learner per class</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 style={{ marginLeft: "90px", fontSize: "40px", marginTop: "5px", color: "#2E3238" }}>$25 <span style={{ fontSize: "18px" }}>total per learner</span></h2>
                    </div>
                </div>
                <div>
                    <button className='purchasebtn2'>Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default GroupClass;