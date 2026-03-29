import React from "react";

import chimpPromo from '../assets/images/chimp-promo.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import talkroom from '../assets/images/talkrooms.png';
import tasapromo from '../assets/images/tasa-incoming.png';
import resizeimage from '../assets/images/resize-image.png';
import accesscontrol from '../assets/images/access-control-system.png';
import landmarks from '../assets/images/landmarks.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
             <div className="project">
                <img src={tasapromo} className="zoom" alt="Theater auto silence app" width="100%"/>
                <h2>Theater Auto Silence App</h2>
                <p>In development. Mobile application for theaters and similar venues to automatically silence devices using geolocation and scheduled events.</p>
            </div>
            <div className="project">
                <a href="https://github.com/GoncaloRibeiro6533/ImageProcessing" target="_blank" rel="noreferrer"><img src={resizeimage} className="zoom" alt="Distributed image processing system" width="100%"/></a>
                <a href="https://github.com/GoncaloRibeiro6533/ImageProcessing" target="_blank" rel="noreferrer"><h2>Distributed Image Processing System</h2></a>
                <p>Distributed image-processing system with load-balancing across multiple gRPC servers and asynchronous resizing using Docker containers with Redis-backed shared state.</p>
            </div>
             <div className="project">
                <a href="https://github.com/GoncaloRibeiro6533/Landmarks" target="_blank" rel="noreferrer"><img src={landmarks} className="zoom" alt="Distributed image processing system" width="100%"/></a>
                <a href="https://github.com/GoncaloRibeiro6533/Landmarks" target="_blank" rel="noreferrer"><h2>AI Monument Recognition API</h2></a>
                <p>AI-powered API for recognizing and identifying landmarks in images using gRPC and Google Cloud Vision API.</p>
            </div>
            <div className="project">
                <a href="https://github.com/GoncaloRibeiro6533/Instant-Messaging" target="_blank" rel="noreferrer"><img src={talkroom} className="zoom" alt="Web-based instant messaging system" width="100%"/></a>
                <a href="https://github.com/GoncaloRibeiro6533/Instant-Messaging" target="_blank" rel="noreferrer"><h2>Web-based Instant Messaging System</h2></a>
                <p>Real-time multi-user chat application with React and Spring, using JDBI for database access and SSE for live updates, deployed via Nginx and Docker.</p>
            </div>
             <div className="project">
                <a href="https://github.com/GoncaloRibeiro6533/chImp-mobile" target="_blank" rel="noreferrer"><img src={chimpPromo} className="zoom" alt="Instant messaging mobile app" width="100%"/></a>
                <a href="https://github.com/GoncaloRibeiro6533/chImp-mobile" target="_blank" rel="noreferrer"><h2>Instant Messaging Mobile App</h2></a>
                <p>Android messaging app built with Kotlin and Jetpack Compose, including REST API integration and WorkManager for background synchronization.</p>
            </div>
            <div className="project">
                <a href="https://github.com/GoncaloRibeiro6533/Access-Control-System" target="_blank" rel="noreferrer"><img src={accesscontrol} className="zoom" alt="Access Control System" width="100%"/></a>
                <a href="https://github.com/GoncaloRibeiro6533/Access-Control-System" target="_blank" rel="noreferrer"><h2>Access Control System</h2></a>
                <p>
                    Access control system designed for managing entry and exit permissions, implemented on a DE10-Lite FPGA using hardware description languages.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;