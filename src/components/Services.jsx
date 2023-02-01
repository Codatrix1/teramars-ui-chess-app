import React from "react";

import Title from "./Title";
import { servicesData } from "../data";

//-------------------------
const Services = () => {
  return (
    <React.Fragment>
      <section className="section services" id="services">
        {/* Title Component*/}
        <Title title="our" subTitle="services" />

        <div className="section-center services-center">
          {servicesData.map((eachService) => {
            const { id, serviceIcon, serviceTitle, serviceText } = eachService;

            return (
              <article key={id} className="service">
                <span className="service-icon">
                  <i className={serviceIcon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{serviceTitle}</h4>
                  <p className="service-text">{serviceText}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Services;
