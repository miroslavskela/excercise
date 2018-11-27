import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}{" "}
        </a>
        <div />
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="fas fa-home" />
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact/add" className="nav-link">
              <i className="fas fa-plus" />
              Add
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              <i className="fas fa-question" />
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
