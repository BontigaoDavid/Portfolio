import React, { Component } from "react";
// import Parallax from "parallax-js";

class Projects extends Component {

  componentDidMount() {
  }

  render() {
    return (
    <div className="display-4 projects-container">
        <div className="project-card">

            <div className="row">
                <div className="col-12 col-sm-7 d-flex align-items-center project-image">
                    <a href="https://vast-cliffs-60334.herokuapp.com/">
                        <img className="w-100" src={require("./images/simply-conceptual.PNG")} alt="gray mini figure under white sneaker" />
                    </a>
                </div>
                <div className="col-12 col-sm-1">
                </div>
                <div className="col-12 col-sm-4 d-inline-flex flex-column justify-content-center">
                    <div className="project-title lead">
                        SIMPLY CONCEPTUAL
                    </div>
                    <div className="project-subtitle">
                        Full Stack Learning Platform
                    </div>
                    <div className="lead project-description">
                        Simply Conceptual is a Full Stack learning platform 
                        that holds content on important conceptuals on full 
                        stack development. It was present as a final project
                        in the 2019 Technical Meetup hosted by SMU showcasing 
                        successful projects developed by the Full Stack
                        Development Teams.
                        
                    </div>
                </div>
            </div>
            
        </div>
        <div className="project-card">
                hELOELEOELOL
        </div>
        <div className="project-card">
                hELOELEOELOL
        </div>
        <div className="project-card">
                hELOELEOELOL
        </div>
    </div>
    );
  }
}

export default Projects;
