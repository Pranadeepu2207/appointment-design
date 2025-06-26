import React from 'react'
import Navbar from './Navbar'
import { FaLocationDot } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { VscError } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import { LiaCommentSolid } from "react-icons/lia";


function DoctorsList() {
  return (
    <>
      <Navbar />
      <div className='doctors-list-container'>
        <div className='input-section-container'>
          <h1 className='input-heading'>Find expert Doctors for an In-clinic session here </h1>
          <div className='input-containers-section'>
            <div className='input-containers'>
              <FaLocationDot fontSize="large" />
              <select name='loaction' className='input-box'>
                <option>Search loaction</option>
              </select>
            </div>
            <div className='input-containers'>
              <input name="serch" type="text" placeholder='eg. Doctor, specialisation, clinic name' className='input-box search-box' />
              <FaLongArrowAltRight fontSize="large" />
            </div>
          </div>
        </div>
        <div className='multiple-input-containers'>
          <select className='multiple-input-box' name="expertise">
            <option>Expertise</option>
          </select>
          <select className='multiple-input-box' name="gender">
            <option>Gender</option>
          </select>
          <select className='multiple-input-box' name="fees">
            <option>Fees</option>
          </select>
          <select className='multiple-input-box' name="languages">
            <option>Languages</option>
          </select>
          <select className='multiple-input-box special-multiple-input-box' name="allfilters">
            <option>All Filters</option>
          </select>
        </div>
        <div className='options-container'>
          <div className='option-box'>
            <span className='option'>Hair Care</span>
            <VscError fontSize="large" />
          </div>
          <div className='option-box'>
            <span className='option'>Female</span>
            <VscError fontSize="large" />
          </div>
          <div className='option-box'>
            <span className='option'>Rs.0 - Rs.500</span>
            <VscError fontSize="large" />
          </div>
          <div className='option-box'>
            <span className='option'>Hindi</span>
            <VscError fontSize="large" />
          </div>
        </div>
        <div className='doctors-cards-container'>
          <div className='doctors-card'>
            <img className='doctors-card-img' src='https://res.cloudinary.com/dfsq067fd/image/upload/v1749641375/samples/people/kitchen-bar.jpg' alt="doctor" />
            <div className='doctors-rating'>
              <span className='rating-number'>4.5</span>
              <FaStar fontSize="large" color='orange' className='doctors-list-icons' />
            </div>
            <h2 className='doctor-list-name'>Dr. Prerna Narang</h2>
            <div className='doctor-list-inner-cards'>
              <div className='doctor-description'>
                <IoIosLink fontSize="large" className='doctors-list-icons' />
                <span className='description-data'>Male-Female Infertility</span>
              </div>
              <div className='doctor-description'>
                <LuGraduationCap fontSize="large" className='doctors-list-icons' />
                <span className='description-data'>7 years of Experience</span>
              </div>
              <div className='doctor-description'>
                <LiaCommentSolid fontSize="large" className='doctors-list-icons' />
                <span className='description-data'>Speaks: English, Hindi, Marathi</span>
              </div>
            </div>
            <div className='doctor-cards-inner-2'>
              <div className='doctor-card-inner-2'>
                <p className='doctor-card-inner-2-head'>Video Consultation</p>
                <p className='doctor-card-inner-2-amount'>Rs. 800</p>
              </div>
              <div className='doctor-card-inner-2'>
                <p className='doctor-card-inner-2-head'>Chat Consultation</p>
                <p className='doctor-card-inner-2-amount'>Free</p>
              </div>
            </div>
            <button className='view-profile-doctor-btn' type="button">View Profile</button>
            <button className='book-a-cosultation-btn' type="button">Book a Consultation</button>
          </div>
          <div className='doctors-card'>
            <img className='doctors-card-img' src='https://res.cloudinary.com/dfsq067fd/image/upload/v1749641375/samples/people/kitchen-bar.jpg' alt="doctor" />
            <div className='doctors-rating'>
              <span className='rating-number'>4.5</span>
              <FaStar fontSize="large" color='orange' className='doctors-list-icons' />
            </div>
            <h2 className='doctor-list-name'>Dr. Prerna Narang</h2>
            <div className='doctor-list-inner-cards'>
              <div className='doctor-description'>
                <IoIosLink fontSize="large" className='doctors-list-icons' />
                <span className='description-data'>Male-Female Infertility</span>
              </div>
              <div className='doctor-description'>
                <LuGraduationCap fontSize="large" className='doctors-list-icons' />
                <span className='description-data'>7 years of Experience</span>
              </div>
              <div className='doctor-description'>
                <LiaCommentSolid fontSize="large" className='doctors-list-icons' />
                <span className='description-data'>Speaks: English, Hindi, Marathi</span>
              </div>
            </div>
            <div className='doctor-cards-inner-2'>
              <div className='doctor-card-inner-2'>
                <p className='doctor-card-inner-2-head'>Video Consultation</p>
                <p className='doctor-card-inner-2-amount'>Rs. 800</p>
              </div>
              <div className='doctor-card-inner-2'>
                <p className='doctor-card-inner-2-head'>Chat Consultation</p>
                <p className='doctor-card-inner-2-amount'>Free</p>
              </div>
            </div>
            <button className='view-profile-doctor-btn' type="button">View Profile</button>
            <button className='book-a-cosultation-btn' type="button">Book a Consultation</button>
          </div>
          <div className='doctors-card'>
            <img className='doctors-card-img' src='https://res.cloudinary.com/dfsq067fd/image/upload/v1749641375/samples/people/kitchen-bar.jpg' alt="doctor" />
            <div className='doctors-rating'>
              <span className='rating-number'>4.5</span>
              <FaStar fontSize="large" color='orange' className='doctors-list-icons' />
            </div>
            <h2 className='doctor-list-name'>Dr. Prerna Narang</h2>
            <div className='doctor-list-inner-cards'>
              <div className='doctor-description'>
                <IoIosLink fontSize="large" />
                <span className='description-data'>Male-Female Infertility</span>
              </div>
              <div className='doctor-description'>
                <LuGraduationCap fontSize="large" className='doctors-list-icons' />
                <span className='description-data'>7 years of Experience</span>
              </div>
              <div className='doctor-description'>
                <LiaCommentSolid fontSize="large" className='doctors-list-icons' />
                <span className='description-data'>Speaks: English, Hindi, Marathi</span>
              </div>
            </div>
            <div className='doctor-cards-inner-2'>
              <div className='doctor-card-inner-2'>
                <p className='doctor-card-inner-2-head'>Video Consultation</p>
                <p className='doctor-card-inner-2-amount'>Rs. 800</p>
              </div>
              <div className='doctor-card-inner-2'>
                <p className='doctor-card-inner-2-head'>Chat Consultation</p>
                <p className='doctor-card-inner-2-amount'>Free</p>
              </div>
            </div>
            <button className='view-profile-doctor-btn' type="button">View Profile</button>
            <button className='book-a-cosultation-btn' type="button">Book a Consultation</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorsList