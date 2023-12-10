import contributors from "../mockData/aboutData";
import React from "react";
import "./About.css";
import Contributor from "./Contributor";

function About() {
  return (
    <div className='about-page'>
      <div className="mission-statement-container">
        <h2 className="h2-ms">Mission Statement</h2>
        <p className='p-ms'>
          Provide an AI-driven application to match the needs of people with
          disabilities to current and available assistive technologies.
        </p>
      </div>
      <div className='contributor-card-container'>
      {contributors.map((contributor) => (
        <Contributor key={contributor.id} {...contributor} />
      ))}
      </div>
    </div>
  );
}

export default About;
