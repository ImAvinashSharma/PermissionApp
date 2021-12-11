import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../movie_details.css";
import Sidebar from "./Sidebar";
import ChatBotCore from "./ChatBotCore";

export const Homepage = () => {
  const history = useHistory();
  const location = useLocation();
  const { profile, name, email, password, mobile } = location.state;
  const [openChatBot, setOpenChatBot] = useState(false);

  return (
    <div className="wrapper ">
      <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
      <Sidebar />
      <div className="main-panel">
        <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
          <div class="container-fluid">
            <div class="navbar-wrapper"></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span class="sr-only">Toggle navigation</span>
              <span class="navbar-toggler-icon icon-bar"></span>
              <span class="navbar-toggler-icon icon-bar"></span>
              <span class="navbar-toggler-icon icon-bar"></span>
            </button>
          </div>
        </nav>

        <div className="row">
          {
            <div className="col-4" style={{ marginLeft: "auto", marginRight: "auto" }}>
              <div className="card">
                <div>
                  <div className="card-img img-fluid">
                    <img src={"https://image.shutterstock.com/image-vector/linear-department-head-icon-business-260nw-1291107907.jpg"} style={{ width: "18rem", height: "20rem" }} />
                  </div>
                  <button onClick={() => history.push("/")}>View Details</button>
                  <button onClick={() => history.push({ pathname: "/bookingform", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } })}>Book Now</button>
                </div>
                <div>
                  <div className="card-img-top img-fluid">
                    <img src={"https://lh3.googleusercontent.com/proxy/xm_55xTiagmJuY7yj9w3SKJ69xJBUo0egDuNEkK4bs_-_hEdBiuA0eJKU6PPu4xMx8aWQiRJZc-RDcEITtH6wFqgXFpRRKChCuX2HOWZwh2NaNMDfRl0fdYgmvVJzMsiWNYhYaboGyKqwwSDCbihfykXPq__IytW7JQVDDNB"} style={{ width: "18rem", height: "20rem" }} />
                  </div>
                  <button onClick={() => history.push("/")}>View Details</button>
                  <button onClick={() => history.push({ pathname: "/bookingform", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } })}>Book Now</button>
                </div>
                <div>
                  <div className="card-img-top img-fluid">
                    <img src={"https://image.shutterstock.com/image-vector/linear-department-head-icon-business-260nw-1291107907.jpg"} style={{ width: "18rem", height: "20rem" }} />
                  </div>
                  <button onClick={() => history.push("/")}>View Details</button>
                  <button onClick={() => history.push({ pathname: "/bookingform", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } })}>Book Now</button>
                </div>
                <div>
                  <div className="card-img-top img-fluid">
                    <img src={"https://image.shutterstock.com/image-vector/linear-department-head-icon-business-260nw-1291107907.jpg"} style={{ width: "18rem", height: "20rem" }} />
                  </div>
                  <button onClick={() => history.push("/")}>View Details</button>
                  <button onClick={() => history.push({ pathname: "/bookingform", state: { profile: profile, name: name, email: email, password: password, mobile: mobile } })}>Book Now</button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <div style={{ position: "fixed", bottom: "80px", right: "20px" }}>
        {openChatBot === true ? <ChatBotCore /> : null}
        <button
          style={{ borderRadius: "300px", height: "50px", position: "fixed", bottom: "20px", right: "20px", backgroundColor: "#6e48aa", border: "none", outline: "none", boxShadow: "0px 0px 10px #6e48aa" }}
          onClick={e => {
            e.preventDefault();
            setOpenChatBot(!openChatBot);
            console.log(openChatBot);
          }}
        >
          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
