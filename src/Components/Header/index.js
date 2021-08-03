import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../../logo.svg";
import "./index.scss";
class LandingHeader extends React.Component {
  render() {
    return (
      <header className="chq-landing-header">
        <div className="chq-header-block">
          <h1 className="chq-header-block__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
              <h3>Status Creator</h3>
            </Link>
          </h1>
          <ul className="chq-header-block__menu">
            <HeaderElements {...this.props} />
          </ul>
        </div>
      </header>
    );
  }
}
export default withRouter(LandingHeader);

function HeaderElements(props) {
  return (
    <Fragment>
      <li>
        <Link to={"/"}>About</Link>
      </li>
      <li>
        <Link to={"/"}>Contact</Link>
      </li>
      <li>
        <div className="chq-login-pane">
          <div className="chq-buttons">
            <Link to={"/login"}>Login</Link>
            <span className="nav-slash">/</span>
            <Link to={"/login"}>Signup</Link>
          </div>
        </div>
      </li>
    </Fragment>
  );
}
