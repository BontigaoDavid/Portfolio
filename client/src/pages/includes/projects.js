import React, { Component } from "react";
// import Parallax from "parallax-js";

class Projects extends Component {

  componentDidMount() {
  }

  render() {
    return (
    <div className="display-4 tab-container">
        <div className="tab-card" data-toggle="collapse" data-target="#project1" aria-expanded="false" aria-controls="collapseExample">
            <div className="project-summary">
                <div className="row">
                    <div className="col-12 col-sm-7 d-flex align-items-center project-image">
                        <a href="https://simplyconceptual.herokuapp.com/">
                            <img className="w-100" src={require("./images/simply-conceptual.PNG")} alt="" />
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
                        <div >
                            Simply conceptual was developed on ReactJS which uses HTML
                            CSS and Javascript to build pages and components and renders 
                            different elements to a main root div using react router. A 
                            node server hosted on heroku serves requests using express.
                            It parses userdata into a mongoDB that hashes users' passwords
                            and generates a temporary web token for authorization and secures
                            user information. Simply conceptual was developed for scratch
                            using all hand written elements and function and demonstrates
                            mastery of cyber security, database queries and parsing, UI 
                            design, servers/api, CRUD functionality, MVC design, and MERN 
                            development.
                        </div>
                    </div>
                    <div className="details-card col-12 col-sm-3">
                        <div className="details-title">
                            Technologies Used
                        </div>
                        <ul className="details-list">
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
                            <li><a href="https://vast-cliffs-60334.herokuapp.com/">Heroku Link</a></li>
                            <li><a href="https://github.com/BontigaoDavid/Project3">Github Link</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="expand-button" >
                DETAILS
            </div>
        </div>


        {/* <div className="tab-card" data-toggle="collapse" data-target="#project1" aria-expanded="false" aria-controls="collapseExample">
            <div className="project-summary">
                <div className="row">
                    <div className="col-12 col-sm-7 d-flex align-items-center project-image">
                        <a href="https://simplyconceptual.herokuapp.com/">
                            <img className="w-100" src={require("./images/simply-conceptual.PNG")} alt="" />
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
                        <div >
                            Simply conceptual was developed on ReactJS which uses HTML
                            CSS and Javascript to build pages and components and renders 
                            different elements to a main root div using react router. A 
                            node server hosted on heroku serves requests using express.
                            It parses userdata into a mongoDB that hashes users' passwords
                            and generates a temporary web token for authorization and secures
                            user information. Simply conceptual was developed for scratch
                            using all hand written elements and function and demonstrates
                            mastery of cyber security, database queries and parsing, UI 
                            design, servers/api, CRUD functionality, MVC design, and MERN 
                            development.
                        </div>
                    </div>
                    <div className="details-card col-12 col-sm-3">
                        <div className="details-title">
                            Technologies Used
                        </div>
                        <ul className="details-list">
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
                            <li><a href="https://vast-cliffs-60334.herokuapp.com/">Heroku Link</a></li>
                            <li><a href="https://github.com/BontigaoDavid/Project3">Github Link</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="expand-button" >
                DETAILS
            </div>
        </div> */}




    </div>
    );
  }
}

export default Projects;
