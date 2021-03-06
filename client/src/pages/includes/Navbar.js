import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';


class Navbar extends React.Component {

  render() {
    const { match, location } = this.props;
    console.log(match);
    return (
      <nav className="navbar navbar-dark ">
        <div className="">

          <div className="" id="navbarText">
            <ul className="navbar-nav m-auto">
              <li className="nav-item lead nav-text">
                <Link
                  to=""
                  className={
                    location.pathname === "/"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  H O M E
                </Link>
              </li>
              <li className="nav-item lead nav-text">
                <Link
                  to="/projects"
                  className={
                    location.pathname.includes("/projects")
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  P R O J E C T S
                </Link>
              </li>
              <li className="nav-item lead nav-text">
                <Link
                  to="/resume"
                  className={
                    location.pathname.includes("/resume")
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  R E S U M E
                </Link>
              </li>
              <li className="nav-item lead nav-text">
                <Link
                  to="/contact"
                  className={
                    location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  C O N T A C T
                </Link>
              </li>
            </ul>
            {/* <span className="navbar-text">
              Navbar text with an inline element
            </span> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
