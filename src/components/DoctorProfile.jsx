import React from 'react'
import Navbar from './Navbar'
import { GoStarFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineHomeWork } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

function DoctorProfile() {
    return (
        <>
            <Navbar />
            <div className='main-container'>
                <div className='overlap-container'>
                    <div className='profile-bg-container'></div>
                    <div className='profile-container'>
                        <img className='doctor-profile' src="https://res.cloudinary.com/dfsq067fd/image/upload/v1750820773/f22cf4c074534b8f8298fd03b834e8d171bab784_spreuq.png" alt="profile" />
                        <div className='about-doctor'>
                            <p className='doctor-name'>Dr. Bruce Willis</p>
                            <p className='doctor-type'>Gynecologist</p>
                            <div className='rating-container'>
                                <span className='rating'>4.2</span>
                                <GoStarFill fontSize="large" color='orange' className='rating-icon-small' />
                                <GoStarFill fontSize="large" color='orange' className='rating-icon-small' />
                                <GoStarFill fontSize="large" color='orange' className='rating-icon-small' />
                                <GoStarFill fontSize="large" color='orange' className='rating-icon-small' />
                            </div>
                        </div>
                        <div className='doctor-page-information'>
                            <div className='information-items'>
                                <p className='information-head'>Followers</p>
                                <p className='information-item'>850</p>
                            </div>
                            <div className='information-items'>
                                <p className='information-head'>Following</p>
                                <p className='information-item'>18K</p>
                            </div>
                            <div className='information-items'>
                                <p className='information-head'>Posts</p>
                                <p className='information-item'>250</p>
                            </div>
                        </div>
                        <button type='button' className='book-appointment-btn'>Book an Appointment</button>
                    </div>
                </div>
                <div className='sections-container'>
                    <div className='left-section'>
                        { /* About-section*/}
                        <div className='about-section'>
                            <div className='about-header'>
                                <h4 className='about-heading'>A Little About me</h4>
                                <div className='follow-container'>
                                    <p className='follow-name'>Follow</p>
                                    <FaPlus fontSize="large" />
                                </div>
                            </div>
                            <div className='about-content'>
                                <p className='about'>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the</p>
                                <div className='read-more'>
                                    <hr className='line' />
                                    <a href='#' className='read-more-text'>Read More</a>
                                </div>
                                <div className='languages-spoken-container'>
                                    <h4 className='languages-spoken-heading'>Languages Spoken</h4>
                                    <p className='languages-spoken'>English</p>
                                    <p className='languages-spoken'>Hindi</p>
                                    <p className='languages-spoken'>Telugu</p>
                                </div>
                                <div className='about-icons-container'>
                                    <FaInstagram fontSize="large" />
                                    <CiFacebook fontSize="large" />
                                    <CiYoutube fontSize="large" />
                                </div>
                            </div>
                        </div>
                        {/* specializtion-section*/}
                        <div className='specialization-section'>
                            <div className='specialization-header'>
                                <h4 className='specialiaztion-heading'>I Specialize In</h4>
                            </div>
                            <div className='specialization-cards'>
                                <div className='specialization-card'>
                                    <img className='specialization-logo' src="https://res.cloudinary.com/dfsq067fd/image/upload/v1750829717/download_1_hoebwx.png" alt="women care" />
                                    <p className='specialization'>Women's Health</p>
                                </div>
                                <div className='specialization-card'>
                                    <img className='specialization-logo' src="https://res.cloudinary.com/dfsq067fd/image/upload/v1750829717/download_2_xrnuuj.png" alt="skin care" />
                                    <p className='specialization'>Skin Care</p>
                                </div>
                                <div className='specialization-card'>
                                    <img className='specialization-logo' src="https://res.cloudinary.com/dfsq067fd/image/upload/v1750829717/download_2_rndkrw.jpg" alt="immunity" />
                                    <p className='specialization'>Immunity</p>
                                </div>
                                <div className='specialization-card'>
                                    <img className='specialization-logo' src="https://res.cloudinary.com/dfsq067fd/image/upload/v1750829717/download_3_xclktb.png" alt="Hair care" />
                                    <p className='specialization'>Hair care</p>
                                </div>
                            </div>
                        </div>
                        {/* the concerns-section */}
                        <div className='concern-section'>
                            <div className="concern-header">
                                <h4 className='concern-head'>The Concerns | Treat</h4>
                            </div>
                            <div className='concern-content'>
                                <p className='concern-item'>Skin Treatment</p>
                                <p className='concern-item'>Pregnancy</p>
                                <p className='concern-item'>Period Doubts</p>
                                <p className='concern-item'>Endometriosis</p>
                                <p className='concern-item'>Pelvic Pain</p>
                                <p className='concern-item'>Ovarian Cysts</p>
                                <p className='concern-item special-concern-item'>+5 More</p>
                            </div>
                        </div>
                        {/* work-experience */}
                        <div className='work-experience-section'>
                            <div className='work-experience-header'>
                                <h4 className='work-experience-head'>My Work Experience</h4>
                            </div>
                            <div className='work-experience-content'>
                                <p className='work-experience-desc'>I have been in practice for : 7+ Years</p>
                                <hr />
                                <div className='work-experience-cont'>
                                    <MdOutlineHomeWork fontSize="large" />
                                    <div className='work-experience-card-1'>
                                        <div className='work-experience-card-2'>
                                            <h6 className='work-experience-place'>Midtown Medical Clinic</h6>
                                            <p className='work-experience-date'>2016 - PRESENT</p>
                                        </div>
                                        <p className='work-expreience-position'>Senior Doctor</p>
                                    </div>
                                </div>
                                <div className='work-experience-cont'>
                                    <MdOutlineHomeWork fontSize="large" />
                                    <div className='work-experience-card-1'>
                                        <div className='work-experience-card-2'>
                                            <h6 className='work-experience-place'>Midtown Medical Clinic</h6>
                                            <p className='work-experience-date'>2010 - 2015</p>
                                        </div>
                                        <p className='work-expreience-position'>Senior Doctor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* review-section */}
                        <div className='review-section'>
                            <div className='review-header'>
                                <h4 className='review-head'>Featured Reviews (102)</h4>
                            </div>
                            <div className='review-cards-section'>
                                <div className='review-card'>
                                    <div className='review-top'>
                                        <div className='reviewr-section'>
                                            <img className='reviewer-pic' src="https://res.cloudinary.com/dfsq067fd/image/upload/v1749641383/samples/smile.jpg" alt="review profile" />
                                            <div className='reviewer-details'>
                                                <h6 className='reviewer-name'>Alicent Hightower</h6>
                                                <p className='reviewer-consult-type'>Consulted for Skin care</p>
                                            </div>
                                        </div>
                                        <p className='review-date'>20 January 2023</p>
                                    </div>
                                    <div className='review-rating'>
                                        <GoStarFill fontSize="large" color='orange' className='review-rating-icon' />
                                        <GoStarFill fontSize="large" color='orange' className='review-rating-icon' />
                                        <GoStarFill fontSize="large" color='orange' className='review-rating-icon' />
                                        <GoStarFill fontSize="large" color='orange' className='review-rating-icon' />
                                        <GoStarFill fontSize="large" color='orange' className='review-rating-icon' />
                                    </div>
                                    <p className='reviwer-desc'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
                                </div>
                                <div className='review-card'>
                                    <div className='review-top'>
                                        <div className='reviewr-section'>
                                            <img className='reviewer-pic' src="https://res.cloudinary.com/dfsq067fd/image/upload/v1749641383/samples/smile.jpg" alt="review profile" />
                                            <div className='reviewer-details'>
                                                <h6 className='reviewer-name'>Alicent Hightower</h6>
                                                <p className='reviewer-consult-type'>Consulted for Skin care</p>
                                            </div>
                                        </div>
                                        <p className='review-date'>20 January 2023</p>
                                    </div>
                                    <div className='review-rating'>
                                        <GoStarFill fontSize="large" color='orange' className='review-rating-icon' />
                                        <GoStarFill fontSize="large" color='orange' className='review-rating-icon' />
                                        <GoStarFill fontSize="large" color='orange' className='review-rating-icon' />
                                        <GoStarFill fontSize="large" color='orange' className='review-rating-icon' />
                                        <GoStarFill fontSize="large" color='orange' className='review-rating-icon' />
                                    </div>
                                    <p className='reviwer-desc'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right-section'>
                        <div className='fee-section'>
                            <p className='fee-name'>Appointment Fee</p>
                            <p className='fee'>699.00 Rs</p>
                        </div>
                        <div className='session-section'>
                            <div className='sessin-header'>
                                <span className='session-head'>Select Your Mode of session</span>
                                <hr className='session-line' />
                            </div>
                            <div className='session-cards'>
                                <div className='session-card'>
                                    <p className='session-type'>In-Clinic</p>
                                    <p className='session-duration'>45 Mins</p>
                                </div>
                                <div className='session-card selected-card'>
                                    <div>
                                        <span className='session-type'>Video</span>
                                        <TiTickOutline fontSize="large" color='green' />
                                    </div>
                                    <p className='session-duration'>45 Mins</p>
                                </div>
                                <div className='session-card'>
                                    <p className='session-type'>Chat</p>
                                    <p className='session-duration'>10 Mins</p>
                                </div>
                            </div>
                        </div>
                        {/* time-slot */}
                        <div className='time-slot-section'>
                            <div className='time-slot-header'>
                                <h4 className='time-slot-head'>Pick a Time Slot</h4>
                                <hr className='time-slot-line' />
                                <CiCalendar fontSize="large" />
                            </div>
                            <div className='time-slot-cards'>
                                <CiCircleChevLeft fontSize="large" />
                                <div className='time-slot-card selected-time-slot'>
                                    <p className='time-slot'>Mon, 10 Oct</p>
                                    <p className='slots'>10 slots</p>
                                </div>
                                <div className='time-slot-card'>
                                    <p className='time-slot'>Tue, 11 Oct</p>
                                    <p color='red' className='slots slot-red'>02 slots</p>
                                </div>
                                <div className='time-slot-card'>
                                    <p className='time-slot'>Wed, 12 Oct</p>
                                    <p color='orange' className='slots slot-orange'>05 slots</p>
                                </div>
                                <CiCircleChevRight fontSize="large" />
                            </div>
                        </div>
                        {/* morning */}
                        <div className='morning-section'>
                            <h4 className='morning-head'>Morning</h4>
                            <div className='morning-cards'>
                                <span className='morning-card'>09.00 AM</span>
                                <span className='morning-card'>09.30 AM</span>
                                <span className='morning-card'>10.00 AM</span>
                                <span className='morning-card'>10.30 AM</span>
                                <span className='morning-card'>11.00 AM</span>
                                <span className='morning-card selected-morning-slot'>11.30 AM</span>
                            </div>
                        </div>
                        {/* Evening */}
                        <div className='morning-section'>
                            <h4 className='morning-head'>Evening</h4>
                            <div className='morning-cards'>
                                <span className='morning-card'>04.00 PM</span>
                                <span className='morning-card'>04.15 PM</span>
                                <span className='morning-card'>04.30 PM</span>
                                <span className='morning-card'>04.45 PM</span>
                                <span className='morning-card'>05.15 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorProfile