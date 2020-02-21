import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <h1>About this application</h1>
      <p>This is an app that let you search github users</p>
      <p>Built with React</p>
      <p>Version: 1.0.0</p>
      <Link className="about__link" to="/">
        Go back
      </Link>
    </div>
  );
};

export default About;
