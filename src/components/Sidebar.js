import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import fire from "../files/firebase";

function Sidebar() {
  const [isAdmin, setISAdmin] = useState(true);

  useEffect(() => {
    fire
      .firestore()
      .collection("users")
      .where("email", "==", email)
      .limit(1)
      .get()
      .then(snapshot =>
        snapshot.forEach(ele => {
          const data = ele.data();
          setISAdmin(data.isAdmin);
          console.log(data.isAdmin);
        })
      );
  }, []);
  const sideEle = ["homepage", "dashboard", "leave", "userprofile", "logout"];
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
          {isAdmin === true ? (
            <li className="nav-item">
              <Link to="/admin_leaves" className="nav-link">
                <i className="material-icons">L</i>
                <p>All Leave Application</p>
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
