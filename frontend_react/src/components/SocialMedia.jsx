import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/ryan-porper/' target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
    </div>
    <div>
      <a href='https://github.com/ryanporper' target="_blank" rel="noopener noreferrer"><BsGithub /></a>        
    </div>
  </div>
);

export default SocialMedia;
