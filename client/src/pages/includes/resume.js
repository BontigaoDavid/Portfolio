import React, { Component } from "react";
// import Parallax from "parallax-js";

class Resume extends Component {

  componentDidMount() {
  }

  render() {
    return (
    <div className="display-4 tab-container">
        <div className="tab-card" data-toggle="collapse" data-target="#project1" aria-expanded="false" aria-controls="collapseExample">
            <div className="row">
                <div className="col-sm-4 ">
                    <div className="d-flex justify-content-center">
                        <div className="resume-img-container">
                            <a href="https://drive.google.com/file/d/1TsaUXtPueHHQVRkaLgPdPlJi7h4gBkA3/view?usp=sharing">
                                <img className="resume-img" src={require("./images/Resume.jpg")} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <div className="resume-container">
                        <div className="resume-card">
                            <div className="details-title lead">
                                LANGUAGES
                            </div>
                            <ul className="resume-list">
                                <li><strong>Front End:</strong> HTML, CSS, Javascript, Bootstrap CDN</li>
                                <li><strong>Back End:</strong> Node.js, React.js, C#, .NET, JAVA</li>
                                <li><strong>Databases:</strong> SQL, MongoDB</li>
                            </ul>
                        </div>

                        <div className="resume-card">
                            <div className="details-title lead">
                            Relevant Skills/Courses
                            </div>
                            <ul className="resume-list">
                                <li>Big-O and Time Complexity</li>
                                <li>Model-Views-Controller Structure</li>
                                <li>Algorithms and Recursive Functions</li>
                                <li>Proficiency in high level mathematics</li>
                                <li>Calculus III</li>
                                <li>Linear Algebra</li>
                                <li>P-Statistics</li>
                                <li>MS Excel</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <div className="resume-container">
                        <div className="resume-card">
                            <div className="details-title lead">
                                Education
                            </div>
                            <ul className="resume-list">
                                <li>Full Stack Web Development - SMU</li>
                                <li>Mathematics Major UTD - 3 Years (gap-year currently)</li>
                            </ul>
                        </div>

                        <div className="resume-card">
                            <div className="details-title lead">
                                Community Involvement
                            </div>
                            <ul className="resume-list">
                                <li>2nd Place in AMC (American Math Competition)</li>
                                <li>Entrepreneurship Seed Business Pitch and Development - 2nd Place</li>
                            </ul>
                        </div>

                        <div className="resume-card">
                            <div className="details-title lead">
                                Work Experience
                            </div>
                            <ul className="resume-list">
                                <li>Developed Kaizen Guest Properties Business Model and Conception</li>
                                <li>Head Waiter Umiya Sushi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Resume;
