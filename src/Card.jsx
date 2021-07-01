import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="col-xl-4 mb-4">
              <div className="card text-center" >
                <img src={props.img} class="card-img-top mx-auto" alt="images" height="250px" />
                <div class="card-body">
                  <h5 class="card-title"> {props.title} </h5>
                  <p class="card-text">
                      {props.para}
                  </p>
                  <div className="same_btn">
                    <a href="#" class="btn btn-primary">
                    {props.btn}
                  </a>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}
export default Card;
