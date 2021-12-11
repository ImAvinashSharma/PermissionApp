import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const sideEle = ["homepage", "dashboard", "bookings", "leave", "userprofile", "logout"];
  const location = useLocation();
  //TODO: to add active class to the current page
  const { profile, name, email, password, mobile } = location.state;
  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);
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
                <Link to={{ pathname: ele === "logout" ? "/" : `/${ele}`, state: { profile: profile, name: name, email: email, password: password, mobile: mobile } }} className="nav-link">
                  <i className="material-icons">{ele === "userprofile" ? "person" : ele === "leave" ? "L" : ele}</i>
                  <p>{ele === "leave" ? "Apply for leave" : ele}</p>
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
