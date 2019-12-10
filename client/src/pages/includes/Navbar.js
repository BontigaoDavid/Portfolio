import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';


class Navbar extends React.Component {

  render() {
    const { match, location } = this.props;
    console.log(match);
    return (
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container">

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav m-auto">
              <li className="nav-item lead">
                <Link
                  to="/"
                  className={
                    location.pathname === "/"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  H O M E
                </Link>
              </li>
              <li className="nav-item lead">
                <Link
                  to="/lesson"
                  className={
                    location.pathname.includes("/lesson")
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  R E S U M E
                </Link>
              </li>
              <li className="nav-item lead">
                <Link
                  to="/about"
                  className={
                    location.pathname.includes("/about")
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  P R O J E C T S
                </Link>
              </li>
              <li className="nav-item lead">
                <Link
                  to="/feedback"
                  className={
                    location.pathname === "/feedback"
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
