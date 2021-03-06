import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ logout, app: { isAuth } }) => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          BookWithMe
        </Link>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2 bwm-search"
            type="search"
            placeholder="Try 'New York'"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 btn-bwm-search"
            type="submit"
          >
            Search
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            {!isAuth && (
              <Fragment>
                <Link className="nav-item nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-item nav-link" to="/register">
                  Register
                </Link>
              </Fragment>
            )}
            {isAuth && (
              <span className="nav-item nav-link logout" onClick={logout}>
                Logout
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ app }) => ({ app });

export default connect(mapStateToProps)(Header);
