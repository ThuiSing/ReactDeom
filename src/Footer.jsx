import React from 'react'

const Footer = () => {
  let CurrentYear = new Date();
  CurrentYear = CurrentYear.getFullYear();

  return (
    <>
      <footer className=" py-3">
        <div className="container" >
          <div className="row">
          <div className="col-xl-12 text-center">
            <h6> &copy; Copyright By Me | All right Reserved {CurrentYear} | Terms and Conditions. </h6>
          </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;
