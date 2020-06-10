import React, { Component } from "react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import profilephoto from "../profile.jpg";
import { AiFillGithub, AiFillLinkedin,  AiOutlineMail } from "react-icons/ai";

import { AiFillSketchCircle, AiFillHtml5 } from "react-icons/ai";

import { DiCss3, DiMongodb, DiRuby, DiPostgresql } from "react-icons/di";

import { GrHeroku } from "react-icons/gr";

import { FaNode, FaReact } from "react-icons/fa";

import { BsCode, BsBootstrapFill } from "react-icons/bs";

import { IoLogoJavascript } from "react-icons/io";

import { IconContext } from "react-icons";


class Dashboard extends Component {
  render() {
    return (
        <div>
            <div className="navbar">
                <div id="navbar-left-container">
                    <a href="/">
                        <h1 className="navbar-name">Marco Riesgo</h1>
                    </a>
                </div>
                <div id="navbar-right-container">
                    <Link activeClass="active" className="navbar-link" to="about" spy={true} smooth={true} duration={500} >About</Link>
                    <Link activeClass="active" className="navbar-link" to="portfolio" spy={true} smooth={true} duration={500} >Portfolio</Link>
                    <h2 className="navbar-link">Resume</h2>
                    <Link activeClass="active" className="navbar-link" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
                    
                </div>
            </div>
            <div className="welcome-container-parent">
                <img src={profilephoto} alt="Marco's Profile Picture" id="profile-picture" />
                <h1 id="hello-welcome">Hey there, I'm Marco.</h1>
                <h3 id="personal-introduction">I am a full-stack web developer with a passion for building beautiful and user-friendly experiences. Take a look at my portfolio! </h3>
                <div className="welcome-container-links-container">
                <IconContext.Provider value={{ className: 'react-icons' }}>
                    <div className="mini-icon-container">
                        <a href="https://github.com/marcoriesgo01" target="_blank">
                            <AiFillGithub size={55}/>
                        </a>
                    </div>
                    <div className="mini-icon-container">
                        <a href="https://www.linkedin.com/in/marco-riesgo-almonacid/" target="_blank">
                            <AiFillLinkedin size={55}/>
                        </a>
                    </div>
                    <div className="mini-icon-container">
                        <a href="mailto:marco.riesgo.almonacid@live.com">
                            <AiOutlineMail size={55}/>
                        </a>
                    </div>
                </IconContext.Provider>
                </div>
            </div>
            <Element name="about">
                <div className="about-parent-container">
                    <h2 id="about-title">About</h2>
                    <div className="about-left-container">
                        <img src={profilephoto} alt="Marco's Profile Picture" id="about-me-picture" />
                        <h5>Marco Riesgo Almonacid</h5>
                        <h6>Los Angeles, CA</h6>
                        <div>
                            <h6 id="about-me-information">I'm a software developer based on Los Angeles, California. Originially from Madrid, Spain, I have previously lived in London, San Francisco, and Jaipur, and speak English and Spanish fluently. My previous experience includes software engineering at General Assembly's Immersive, founding a safety startup, running a nonprofit based in India, and earning my Bachelor's of Science from the University of Pennsylvania. Check out my <a href="https://github.com/marcoriesgo01" target="_blank" id="inline-link">Github</a> and <a href="https://www.linkedin.com/in/marco-riesgo-almonacid/" target="_blank" id="inline-link">LinkedIn</a> to follow what I am up to!</h6>
                        </div>
                    </div>
                    <div className="about-right-container">
                        <h3 id="skills-title">Programming Skills</h3><br />
                        <div className="skill-container">
                            <div className="skill-icon-container">    
                                <IoLogoJavascript size={32}/>
                            </div>
                            <h5 className="skill-name">Javascript</h5>
                        </div>
                        <div className="skill-container">
                            <div className="skill-icon-container">    
                                <FaReact size={32}/>
                            </div>
                            <h5 className="skill-name">React</h5>
                        </div>
                        <div className="skill-container">
                            <div className="skill-icon-container">    
                                <AiFillHtml5 size={32}/>
                            </div>
                            <h5 className="skill-name">HTML5</h5>
                        </div>
                        <div className="skill-container">
                            <div className="skill-icon-container">    
                                <DiCss3 size={32}/>
                            </div>
                            <h5 className="skill-name">CSS3</h5>
                        </div>
                        <div className="skill-container">
                            <div className="skill-icon-container">    
                                <FaNode size={32}/>
                            </div>
                            <h5 className="skill-name">Node.js</h5>
                        </div>
                        <div className="skill-container">
                            <div className="skill-icon-container">    
                                <BsCode size={32}/>
                            </div>
                            <h5 className="skill-name">Express</h5>
                        </div>
                        <div className="skill-container">
                            <div className="skill-icon-container">    
                                <DiMongodb size={32}/>
                            </div>
                            <h5 className="skill-name">MongoDB</h5>
                        </div>
                        <div className="skill-container">
                            <div className="skill-icon-container">    
                                <DiRuby size={32}/>
                            </div>
                            <h5 className="skill-name">Ruby on Rails</h5>
                        </div>
                        <div className="skill-container">
                            <div className="skill-icon-container">    
                                <DiPostgresql size={32}/>
                            </div>
                            <h5 className="skill-name">Postgres</h5>
                        </div>
                        <div className="skill-container">
                            <div className="skill-icon-container">    
                                <GrHeroku size={32}/>
                            </div>
                            <h5 className="skill-name">Heroku</h5>
                        </div>
                        <div className="skill-container">
                            <div className="skill-icon-container">    
                                <AiFillSketchCircle size={32}/>
                            </div>
                            <h5 className="skill-name">Sketch</h5>
                        </div>
                        <div className="skill-container">
                            <div className="skill-icon-container">    
                                <BsBootstrapFill size={32}/>
                            </div>
                            <h5 className="skill-name">Bootstrap</h5>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name="portfolio">
                <div className="portfolio-parent-container">
                    <h2 id="portfolio-title">Portfolio</h2>
                    <div className="portfolio-left-project">
                        <div className="project-card">
                            <h1>Hello</h1>
                        </div>
                    </div>
                    <div className="portfolio-right-project">
                        
                    </div>
                    
                </div>
            </Element>
            <Element name="contact">
                <div className="contact-parent-container">
                    <h2 id="contact-title">Contact</h2>
                    <h5 id="contact-message-text">I'm always looking to learn from others, share ideas, and take on new opportunities. If there is anything you would like to discuss, make sure to <a href="mailto:marco.riesgo.almonacid@live.com" id="send-me-email">send me an email.</a> In the meantime, feel free to check out my Github and LinkedIn</h5>
                    <IconContext.Provider value={{ className: 'react-contact-icons' }}>
                        <div className="contact-icon-container">
                                <a href="https://github.com/marcoriesgo01" target="_blank" id="contact-icon">
                                    <AiFillGithub size={55}/>
                                </a>
                        </div>
                        <div className="contact-icon-container">
                                <a href="https://www.linkedin.com/in/marco-riesgo-almonacid/" target="_blank" id="contact-icon">
                                    <AiFillLinkedin size={55}/>
                                </a>
                        </div>
                    </IconContext.Provider>
                </div>
            </Element>
            <div className="footer-parent-container">
                <h6 id="footer-text">© 2020 Marco Riesgo Almonacid. Built with React.js</h6>
            </div>
        </div>
    );
  }
}
export default Dashboard;