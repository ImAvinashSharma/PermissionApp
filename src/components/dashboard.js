import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DateRange from "@material-ui/icons/DateRange";
import WeekendSharpIcon from "@material-ui/icons/WeekendSharp";
import AttachMoneySharpIcon from "@material-ui/icons/AttachMoneySharp";
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
    <div className="wrapper ">
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
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card card-stats">
                      {/* <div class="card-header card-header-warning card-header-icon">
                                                <div class="card-icon">
                                                <i class="material-icons"><LocalMoviesIcon /></i>
                                                </div>
                                                <p class="card-category">Movie Name</p>
                                                <h3 class="card-title">{data.data.moviename}

                                                </h3>
                                            </div> */}
                      <div class="card-footer">
                        <div class="stats">
                          <i class="material-icons text-danger">warning</i>
                          Movie Name
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
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
                          <i class="material-icons">date_range</i> Movie Date
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card card-stats">
                      <div class="card-header card-header-danger card-header-icon">
                        <div class="card-icon">
                          <i class="material-icons">
                            <WeekendSharpIcon />
                          </i>
                        </div>
                        <p class="card-category">slot Number</p>
                        <h3 class="card-title">{data.data.ceatnames}</h3>
                      </div>
                      <div class="card-footer">
                        <div class="stats">
                          <i class="material-icons">local_offer</i> Ceat Number
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card card-stats">
                      <div class="card-header card-header-info card-header-icon">
                        <div class="card-icon">
                          <i class="material-icons">
                            <AttachMoneySharpIcon />
                          </i>
                        </div>
                        <p class="card-category">Total Amount</p>
                        <h3 class="card-title">{data.data.totalcost}</h3>
                      </div>
                      <div class="card-footer">
                        <div class="stats">
                          <i class="material-icons">update</i> Total Amount
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {openChatBot === true ? <ChatBotCore /> : null}
            <button
              onClick={e => {
                e.preventDefault();
                setOpenChatBot(!openChatBot);
                console.log(openChatBot);
              }}
            >
              chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
