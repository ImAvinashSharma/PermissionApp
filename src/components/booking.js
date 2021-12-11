import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import fire from "../files/firebase";
import "../movie_details.css";
import Sidebar from "./Sidebar";

export const Booking = () => {
  const location = useLocation();
  const email = "admin@admin.com" || location.state.email;
  const [userbookings, setuserbookings] = useState([]);

  useEffect(() => {
    fire
      .firestore()
      .collection("Bookings")
      .where("email", "==", email)
      .get()
      .then(snapshot =>
        snapshot.forEach(ele => {
          const data = ele.data();
          setuserbookings(arr => [...arr, { data: data }]);
          // console.log(data);
        })
      );
  }, []);
  //console.log(userbookings);
  return (
    <div className="wrapper ">
      <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
      <Sidebar />
      <div className="main-panel">
        <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
          <div class="container-fluid">
            <div class="navbar-wrapper"></div>
            <button class="navbar-toggler" id="table-nav" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span class="sr-only">Toggle navigation</span>
              <span class="navbar-toggler-icon icon-bar"></span>
              <span class="navbar-toggler-icon icon-bar"></span>
              <span class="navbar-toggler-icon icon-bar"></span>
            </button>
          </div>
        </nav>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header card-header-primary">
                    <h4 className="card-title">Request</h4>
                    <p className="card-category" id="card-category">
                      Bookings Appear Here
                    </p>
                  </div>
                  <div className="card-body" id="movie-table-card">
                    <div className="table-responsive" id="movie-table">
                      <table className="table">
                        <thead className=" text-primary">
                          <th>slot registered Date</th>
                          {/* <th>
                                                        Movie Name
                                                    </th> */}
                          <th>requests</th>
                          {/* <th>
                                                         Date
                                                    </th> */}
                        </thead>
                        <tbody>
                          {userbookings.map((data, index) => {
                            return (
                              <tr key={index}>
                                <td>{data.data.currentdate}</td>
                                <td>{data.data.moviename}</td>
                                <td>{data.data.totalceats}</td>
                                <td>{data.data.bookingdate}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
