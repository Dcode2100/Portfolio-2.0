import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href = "https://github.com/dikshant2142001" target="_blank" rel = "noopener noreferrer">
        <FaGithub />
        </a>
    </div>
    <div>
    <a href = "https://www.linkedin.com/in/dikshant-solanki-025468150?original_referer=" target="_blank" rel = "noopener noreferrer">
        <FaLinkedin />
        </a>
    </div>
  </div>
);

export default SocialMedia;
