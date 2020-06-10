import React, { Component } from "react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Dashboard extends Component {
  render() {
    return (
        <div>
            <div className="navbar-fixed">
                <div id="navbar-left-container">
                    <a href="/">
                        <h1 className="navbar-name">Marco Riesgo</h1>
                    </a>
                </div>
                <div id="navbar-right-container">
                    <h2 className="navbar-link">Projects</h2>
                    <h2 className="navbar-link">About</h2>
                    <h2 className="navbar-link">Resume</h2>
                    <h2 className="navbar-link">Contact</h2>
                </div>
            </div>
            <div className="welcome-container-parent">
                hello
            </div>
        </div>
    );
  }
}
export default Dashboard;