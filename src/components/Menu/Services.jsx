import React from "react";
import Card from "../Service/Card";
import { Sdata } from "../Service/Sdata";

const Services = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="row py-3 text-center pb-5">
            <div className="col-xl-12">
              <h2>Our Services</h2>
            </div>
          </div>
          <div className="row">
            {Sdata.map((value, ind) => (
              <Card
                key={value.key}
                img={value.img}
                title={value.Ctitile}
                para={value.Cpara}
                btn={value.Cbtn}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
