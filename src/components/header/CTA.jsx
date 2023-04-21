import React from 'react';
import CV from '../../assets/NagashaJ-CV.pdf';

function CTA() {
  return (
    <div className="cta">
      <a href='https://docs.google.com/document/d/1Tvw7k68q0JNNHxigEBnp3rJDdeC-eZkUUYLkvH5tmaw/edit?usp=sharing' className="btn" target="_blank" rel="noopener noreferrer">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
