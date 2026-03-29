import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faJava } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Kotlin",
    "Java",
    "React",
    "TypeScript",
    "JavaScript",
    "SQL",
    "PL/pgSQL"
];

const labelsSecond = [
    "Google Cloud Platform",
    "Git",
    "Docker",
    "Nginx",
    "Gradle",
    "RabbitMQ",
    "gRPC",
    "protobuf",
    "GitHub Actions"
];

const labelsThird = [
    "PostgreSQL",
    "MongoDB",
    "Elasticsearch",
    "Firestore",
    "Redis",
    "JUnit"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Languages & Frameworks</h3>
                    <p>Strong foundation in backend and full-stack development using Kotlin, Java, TypeScript, JavaScript, and SQL with practical work in Spring MVC, Node.js, Express.js, and React.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud & Tools</h3>
                    <p>Hands-on experience with cloud-native and distributed systems tooling including Google Cloud Platform, Dockerized deployments, CI workflows, message brokers, and service communication protocols.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Databases & Testing</h3>
                    <p>Experience designing and integrating relational and NoSQL data layers for real-time and distributed applications, with testing support through JUnit and version control with Git/GitHub.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;