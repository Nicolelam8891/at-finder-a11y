import contributors from "../mockData/aboutData";
import React from 'react';
import "./About.css";
import Contributor from "./Contributor";


function About() {
  return (
    <div className='about-page'>
      {contributors.map((contributor) => (
        <Contributor key={contributor.id} {...contributor} />
      ))}
    </div>
  );
}

export default About;
