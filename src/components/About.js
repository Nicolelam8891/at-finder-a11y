import contributors from "../mockData/aboutData";
import React from "react";
import { useEffect } from "react";
import "./About.css";
import Contributor from "./Contributor";

function About() {
  useEffect(() => {
    document.title = 'About - AI AT Ally';
  }, [])

  return (
    <div className='about-page'>
      <div className="mission-statement-container">
        <h2 className="h2-ms">Mission Statement</h2>
        <p className='p-ms'>
          Provide an AI-driven application to match the needs of people with
          disabilities to current and available assistive technologies.
        </p>
        <h2 className="team"><em>About our team</em></h2>
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
