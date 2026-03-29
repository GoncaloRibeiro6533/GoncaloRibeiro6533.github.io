import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import linkedin from '../assets/images/linkedin.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={linkedin} alt="Avatar" />
         </div>
        <div className="content">       
          <div className="social_icons">
            <a href="https://github.com/GoncaloRibeiro6533" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/gonçalo-ribeir0" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Gonçalo Ribeiro</h1>

          <div className="mobile_social_icons">
            <a href="https://github.com/GoncaloRibeiro6533" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/gonçalo-ribeir0" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;