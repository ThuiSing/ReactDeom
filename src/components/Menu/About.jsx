import React from 'react'
import { NavLink } from 'react-router-dom';
import S_img  from '../../images/picachoo.png'

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container ">
          <div className="row">
            <div className="col-xl-12 text-center hp_right hp_left">
              <img src ={S_img} alt="cr.img" width="350px" />
              <h2>Welcome to About Page <span> Thui Sing</span></h2>
              <p>We are team of talented developer making websites.</p>
              <div className="about-btn same_btn">
                <NavLink to="/contact" className="btn btn-primary rounded-pill"> Contact Us </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About;