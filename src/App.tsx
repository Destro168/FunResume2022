/**
 * The main component handles the highest-level routing of pages based on user interaction.
 * See EPages.tsx for page options and PageSlice.tsx for page store management.
 */

import * as React from 'react';
import './App.css';
import './index.css';

// @ts-ignore
import img from './Assets/experienced.png';
// @ts-ignore
import educated from './Assets/educated.png';
// @ts-ignore
import certified from './Assets/cert_security_plus.png';

// @ts-ignore
import repo_fantasyrpg from './Assets/repo_fantasyrpg.png';
// @ts-ignore
import repo_fcc from './Assets/repo_fcc.png';
// @ts-ignore
import repo_lootquest from './Assets/repo_lootquest.png';

const subCard = 'text-center shadow p-3 mb-4 bg-white rounded customCard';
const cardClass = 'customJumbo text-center shadow p-3 mb-4 bg-white rounded';
const linkedInLink = 'https://www.linkedin.com/in/darsd/';
const githubLink = 'https://www.github.com/destro168';

function getIntro() {
    return (
        <div className={cardClass}>
            <h2>Hi.</h2>
            <h2>
                I'm <span className="purpleProducts">Donald</span>.
            </h2>
            <h2>
                Let's Create Something <span className="secondary-color">GREAT</span> Together!
            </h2>
        </div>
    );
}
function getExperience() {
    return (
        <div className={cardClass}>
            <h3>
                <span className="secondary-color">Credentialed</span>
            </h3>

            <div className="three-images">
                {/* Experienced Card */}
                <div className={subCard}>
                    <p>
                        <img className="myImg" src={img} />
                    </p>
                    <h4 className="codeSubtext">4.5 Years Professional Experience at ALC & HII</h4>
                </div>
                {/* Educated Card */}
                <div className={subCard}>
                    <p>
                        <img className="myImg" src={educated} />
                    </p>
                    <h4 className="codeSubtext">M.S Cybersecurity & B.S. Computer Science</h4>
                </div>
                {/* Certified Card */}
                <div className={subCard}>
                    <p>
                        <img className="myImg" src={certified} />
                    </p>
                    <h4 className="codeSubtext">Security+, Linux+, Scrum, & Full Stack Certifications</h4>
                </div>
            </div>
        </div>
    );
}

function getProjects() {
    return (
        <div className={cardClass}>
            <h3>
                <span className="secondary-color">Passionate</span>
            </h3>

            <div className="three-images">
                {/* LootQuest Card */}
                <div className={subCard}>
                    <h3>Loot Quest</h3>
                    <p>
                        <img className="myImg" src={repo_lootquest} />
                    </p>
                    <h4 className="codeSubtext">
                        Story-rich adventure game written in React with React Hooks, React Context and Zustand
                        Implementations
                    </h4>
                    <h5 className="codeSubtext">
                        <a target="_blank" href="https://github.com/Destro168/LootQuest3">
                            https://github.com/Destro168/LootQuest3
                        </a>
                    </h5>
                </div>

                {/* FCC Card */}
                <div className={subCard}>
                    <h3>FCC Projects</h3>
                    <p>
                        <img className="myImg" src={repo_fcc} />
                    </p>
                    <h4 className="codeSubtext">30 Unique Free Code Camp (FCC) Projects</h4>
                    <h5 className="codeSubtext">
                        <a target="_blank" href="https://github.com/Destro168/freeCodeCamp-Projects">
                            https://github.com/Destro168/freeCodeCamp-Projects
                        </a>
                    </h5>
                </div>

                {/* FantasyRpg Card */}
                <div className={subCard}>
                    <h3>FantasyRpg</h3>
                    <p>
                        <img className="myImg" src={repo_fantasyrpg} />
                    </p>
                    <h4 className="codeSubtext">50,000+ Lines of Code Minecraft Paper Server Total Overhaul</h4>
                    <h5 className="codeSubtext">Private Repo, Invite Available Upon Request</h5>
                </div>
            </div>
        </div>
    );
}

function getReview() {
    return (
        <div className={cardClass}>
            <h3>
                <span className="secondary-color">Proven Skills</span>
            </h3>

            <div className="quote-container">
                <span className="quote quote-left">“</span>
                <blockquote className="">
                    <p>
                        Donald has shown he is very resourceful and can fit into any situation very quickly. He has
                        jumped around to entirely different teams using completely different technologies and has
                        flourished. He has good communication skills and regularly checks in with former team mates to
                        keep those connections. He [accepts] feedback well which can be seen in his work.
                    </p>
                </blockquote>
                <span className="quote quote-right">”</span>
            </div>
            <footer className="blockquote-footer">
                Josh Rode, Team Lead & Manager @ Huntington Ingals Industries, <cite>2020-2021 Performance Review</cite>
            </footer>
        </div>
    );
}

function getContact() {
    return (
        <div className={cardClass}>
            <h2>Interested? Let's Chat!</h2>
            <div className="s1 remove-bottom-margin">
                <p>Donald Abdullah-Robinson</p>
                <p>donabdulrob@gmail.com</p>
                <p>Virginia Beach, VA</p>
                <p>
                    <a target="_blank" href={linkedInLink}>
                        LinkedIn
                    </a>
                </p>
                <p>
                    <a target="_blank" href={githubLink}>
                        GitHub
                    </a>
                </p>
            </div>
            <h5 className="codeSubtext">
                Source Material, Proofs & Images for All Website Content Available Upon Request
            </h5>
        </div>
    );
}

function getBody() {
    return (
        <div className="app wrapper">
            {getIntro()}
            {getExperience()}
            {getProjects()}
            {getReview()}
            {getContact()}
        </div>
    );
}

export default function App(): JSX.Element {
    return <div>{getBody()}</div>;
}
