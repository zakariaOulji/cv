import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <React.Fragment key={val.id}>
              <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="À propos de moi" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};
