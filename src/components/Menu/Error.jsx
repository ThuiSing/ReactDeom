import React from 'react'
import icon from '../../images/error_icon.svg'

const Error = () => {
  return (
    <>
      <section class="error">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 error_main text-center">
                    <img  src={icon} alt="erro emoji"/>
                    <h2 class="mt-3">404</h2>
                    <h3>Page Not Found</h3>
                    <p class="w-50"> you’re looking for a page but the web application you’re talking to has no idea what you’re talking about.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
export default Error;