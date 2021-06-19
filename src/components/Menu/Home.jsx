import React from 'react'
import HomeMainImg from '../../images/monkey.png'
import Typical from 'react-typical'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container homepage">
          <div className="row row_content_center">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="hp_left same_btn">
                <h2 className="w-75 home_text">Grow your buisiness with <span>
                <Typical loop={Infinity} wrapper="b" steps={['Thui Sing', 1000, 'Developer', 500]} />
                </span></h2>
                <p>We are team of talanted developer making websites</p>
                <a href="" className="btn rounded-pill ">Get Started</a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="hp_right text-center">
              <img src={HomeMainImg} alt="cartoon image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;