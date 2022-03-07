import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Css/Home.css";

class Home extends Component {
  render() {
    return (
      <>
        <nav className="nav-group">
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </li>
            <div className="btn">
              <button className="signin_btn">
                <Link to="/signin">SignIn</Link>
              </button>
              <button className="signup_btn">
                <Link to="/signup">SignUp</Link>
              </button>
            </div>
          </ul>
        </nav>
        <h1>React WebPage</h1>
        <h2>Home page</h2>
      </>
    );
  }
}

export default Home;
