import React from "react";
import { useLocation } from "react-router-dom";
import fire from "../files/firebase";
import "../profile.css";
import Sidebar from "./Sidebar";

export const Userprofile = () => {
  const location = useLocation();
  const { profile, name, email, mobile } = location.state;
  return (
    <div>
      <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
      <Sidebar />
      <div className="main-panel">
        <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
          <div class="container-fluid">
            <div class="navbar-wrapper"></div>
            <button class="navbar-toggler" id="pro-nav" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span class="sr-only">Toggle navigation</span>
              <span class="navbar-toggler-icon icon-bar"></span>
              <span class="navbar-toggler-icon icon-bar"></span>
              <span class="navbar-toggler-icon icon-bar"></span>
            </button>
          </div>
        </nav>

        <div className="profile" style={{ fontFamily: "sans-serif", textAlign: "center", width: "350px", boxShadow: "0 0 10px rgba(0,0,0,0.2)", padding: "100px" }}>
          <img src={profile} alt="Profile Image" className="profile__image" style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%", margin: "0 auto 20px auto", display: "block", marginTop: "-8%" }} />
          <div className="profile__name" style={{ fontSize: "1.2em", fontWeight: "bold" }}>
            {name}
          </div>
          <br />
          <div className="profile__title" style={{ marginBottom: "20px" }}>
            {email}
          </div>

          <div className="profile__detail" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9em", marginBottom: "20px" }}>
            <i className="material-icons">person</i>
            {mobile}
          </div>
        </div>
      </div>
    </div>
  );
};
