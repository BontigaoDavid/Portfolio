import React, { Component } from "react";
// import Parallax from "parallax-js";

class Projects extends Component {

  componentDidMount() {
  }

  render() {
    return (
    <div className="display-4 projects-container">
        <div className="project-card" data-toggle="collapse" data-target="#project1" aria-expanded="false" aria-controls="collapseExample">
            <div className="project-summary">
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
            <div className="collapse" id="project1">
                <div className="project-details row">
                    <div className="details-card col-12 col-sm-3">
                        <div className="details-title">
                            Details
                        </div>
                    </div>
                    <div className="details-card col-12 col-sm-3">
                        <div className="details-title">
                            Technologies Used
                        </div>
                        <ul className="technologies-list">
                            <li>HTML/CSS/Javascript</li>
                            <li>ReactJS</li>
                            <li>Express</li>
                            <li>B-crypt Hashing (Web Token/Password)</li>
                            <li>Deployed on Heroku</li>
                        </ul>
                    </div>
                    <div className="details-card col-12 col-sm-3">
                        <div className="details-title">
                            More Information
                        </div>
                        <ul className="details-list">
                            <li><a href="https://vast-cliffs-60334.herokuapp.com/">*Heroku Link*</a></li>
                            <li><a href="https://github.com/BontigaoDavid/Project3">*Github Link*</a></li>
                            <li>React Router</li>
                            <li>Express Server</li>
                            <li>MongoDB</li>
                            <li>Mongoose ORM</li>
                            <li>B-crypt Hashing (Web Token/Password)</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="expand-button" >
                DETAILS
            </div>
        </div>
    </div>
    );
  }
}

export default Projects;
