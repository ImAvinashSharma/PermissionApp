import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DateRange from "@material-ui/icons/DateRange";
import WeekendSharpIcon from "@material-ui/icons/WeekendSharp";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import fire from "../files/firebase";
import ChatBotCore from "./ChatBotCore";
import "../movie_details.css";
import Sidebar from "./Sidebar";

export const Dashboard = () => {
  const location = useLocation();
  const { email } = location.state;
  const [userbookings, setuserbookings] = useState([]);
  const [openChatBot, setOpenChatBot] = useState(false);

  useEffect(() => {
    fire
      .firestore()
      .collection("Bookings")
      .where("email", "==", email)
      .limit(1)
      .get()
      .then(snapshot =>
        snapshot.forEach(ele => {
          const data = ele.data();
          setuserbookings(arr => [...arr, { data: data }]);
          // console.log(data);
        })
      );
  }, []);
  return (
    <div className="wrapper">
      <Sidebar />
      <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
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
        <div class="content">
          <div class="container-fluid" id="dashboard">
            {userbookings.map((data, index) => {
              return (
                <div class="row" key={index}>
                  <div class="col-lg-10 col-md-8 col-sm-8">
                    <div class="card card-stats">
                      <div class="card-header card-header-success card-header-icon">
                        <div class="card-icon">
                          <i class="material-icons">
                            <DateRange />
                          </i>
                        </div>
                        <p class="card-category">Requested Date</p>
                        <h3 class="card-title">{data.data.bookingdate}</h3>
                      </div>
                      <div class="card-footer">
                        <div class="stats">
                          <i class="material-icons">date_range</i> Requested Date
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-10 col-md-8 col-sm-8">
                    <div class="card card-stats">
                      <div class="card-header card-header-danger card-header-icon">
                        <div class="card-icon">
                          <i class="material-icons">
                            <WeekendSharpIcon />
                          </i>
                        </div>
                        <p class="card-category">Requested Time Slot</p>
                        <h3 class="card-title">{data.data.ceatnames}</h3>
                      </div>
                      <div class="card-footer">
                        <div class="stats">
                          <i class="material-icons">local_offer</i>Time Slot Number
                        </div>
                      </div>
                    </div>
                  </div>
                  {data.data.status === true ? (
                    <div class="col-lg-10 col-md-8 col-sm-8">
                      <div class="card card-stats">
                        <div class="card-header card-header-info card-header-icon">
                          <div class="card-icon">
                            <i class="material-icons">
                              <AccessibilityIcon />
                            </i>
                          </div>
                          <p class="card-category">Status</p>
                          <h3 class="card-title">{data.data.status === true ? "Accepted" : "Rejected"}</h3>
                        </div>
                        <div class="card-footer">
                          <div class="stats">
                            <i class="material-icons">update</i>
                            Status
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div class="col-lg-10 col-md-8 col-sm-8">
                      <div class="card card-stats">
                        <div class="card-header card-header-info card-header-icon">
                          <div class="card-icon">
                            <i class="material-icons">
                              <AccessibilityIcon />
                            </i>
                          </div>
                          <p class="card-category">Status</p>
                          <h3 class="card-title">{data.data.reject}</h3>
                        </div>
                        <div class="card-footer">
                          <div class="stats">
                            <i class="material-icons">update</i>
                            Status
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
