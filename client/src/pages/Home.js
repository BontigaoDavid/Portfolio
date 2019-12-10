import React, { Component } from "react";
import Usertab from "../components/user/Usertab";
import { Header, Navbar, Footer } from "./includes/index";
// import Parallax from "parallax-js";

class Home extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="display-4 name-container">
          D &nbsp; A &nbsp; V &nbsp; I &nbsp; D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; B &nbsp; O &nbsp; N &nbsp; T &nbsp; I &nbsp; G &nbsp; A &nbsp;  O
        </div>
        <p className="lead title-container">
          D &nbsp;&nbsp;&nbsp; E &nbsp;&nbsp;&nbsp; V &nbsp;&nbsp;&nbsp; E &nbsp;&nbsp;&nbsp; L &nbsp;&nbsp;&nbsp; O &nbsp;&nbsp;&nbsp; P &nbsp;&nbsp;&nbsp; E &nbsp;&nbsp;&nbsp; R &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; D &nbsp;&nbsp;&nbsp; E &nbsp;&nbsp;&nbsp; S &nbsp;&nbsp;&nbsp; I &nbsp;&nbsp;&nbsp; G &nbsp;&nbsp;&nbsp; N &nbsp;&nbsp;&nbsp; E &nbsp;&nbsp;&nbsp; R
          </p>
        <Navbar />
      </div>
    );
  }
}

export default Home;
