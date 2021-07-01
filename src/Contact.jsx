import React from 'react'
import Form from './Form';

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="row mb-4">
            <div className="col-xl-12 text-center">
              <h2> Contact Us </h2>
            </div>
          </div>
          <div className="row form_center">
            <div className="col-xl-3"></div>
            <div className="col-xl-6">
              <Form />
            </div>
            <div className="col-xl-3"></div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact;