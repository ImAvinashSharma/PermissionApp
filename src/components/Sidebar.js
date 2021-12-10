import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const sideEle = ["homepage", "dashboard", "bookings", "userprofile", "logout"];
  const location = useLocation();
  //TODO: to add active class to the current page
  const { profile, name, email, password, mobile } = location.state;
  return (
    <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      <div className="logo">
        <a href="/" className="simple-text logo-normal">
          Permission Request
        </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          {sideEle.map(ele => {
            return (
              <li className={`nav-item`}>
                <Link to={{ pathname: `/${ele}`, state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                  <i className="material-icons">{ele === "userprofile" ? "person" : ele}</i>
                  <p>{ele}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
