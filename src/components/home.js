import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import fire from "../files/firebase";
import "../movie_details.css";
import Sidebar from "./Sidebar";

export const Homepage = () => {
  const history = useHistory();
  const location = useLocation();
  const { profile, name, email, password, mobile } = location.state;
  const [moviedata, setmoviedata] = useState([]);

  useEffect(() => {
    fire
      .firestore()
      .collection("currentmovies")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          var data = doc.data();
          //console.log(data);
          setmoviedata(arr => [...arr, { data: data }]);
        });
      });
    console.log(moviedata);
  }, []);
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
          {moviedata.map((data, index) => {
            //console.log(data.image);
            return (
              <div className="col-4" key={index} style={{ marginLeft: "auto", marginRight: "auto" }}>
                <div className="card">
                  <div className="card-img-top img-fluid">
                    <img src={"https://image.shutterstock.com/image-vector/linear-department-head-icon-business-260nw-1291107907.jpg"} style={{ width: "18rem", height: "20rem" }} />
                  </div>
                  <button onClick={() => history.push({ pathname: "/details", state: { viedourl: data.data.viedourl, moviename: data.data.moviename, description: data.data.description, actorname: data.data.actorname, directorname: data.data.directorname, releasedate: data.data.releasedate, outdate: data.data.outdate } })}>View Details</button>
                  <button onClick={() => history.push({ pathname: "/bookingform", state: { releasedate: data.data.releasedate, outdate: data.data.outdate, movieimage: data.data.image, moviename: data.data.moviename, ticketcost: data.data.ticketcost, profile: profile, name: name, email: email, password: password, mobile: mobile } })}>Book Now</button>
                  <div className="card-img-top img-fluid">
                    <img src={"https://lh3.googleusercontent.com/proxy/xm_55xTiagmJuY7yj9w3SKJ69xJBUo0egDuNEkK4bs_-_hEdBiuA0eJKU6PPu4xMx8aWQiRJZc-RDcEITtH6wFqgXFpRRKChCuX2HOWZwh2NaNMDfRl0fdYgmvVJzMsiWNYhYaboGyKqwwSDCbihfykXPq__IytW7JQVDDNB"} style={{ width: "18rem", height: "20rem" }} />
                  </div>
                  <button onClick={() => history.push({ pathname: "/details", state: { viedourl: data.data.viedourl, moviename: data.data.moviename, description: data.data.description, actorname: data.data.actorname, directorname: data.data.directorname, releasedate: data.data.releasedate, outdate: data.data.outdate } })}>View Details</button>
                  <button onClick={() => history.push({ pathname: "/bookingform", state: { releasedate: data.data.releasedate, outdate: data.data.outdate, movieimage: data.data.image, moviename: data.data.moviename, ticketcost: data.data.ticketcost, profile: profile, name: name, email: email, password: password, mobile: mobile } })}>Book Now</button>
                  <div className="card-img-top img-fluid">
                    <img src={"https://i0.wp.com/www.differencebetween.com/wp-content/uploads/2018/09/Difference-Between-Theory-and-Principle-fig-2.jpg"} style={{ width: "18rem", height: "20rem" }} />
                  </div>
                  <button onClick={() => history.push({ pathname: "/details", state: { viedourl: data.data.viedourl, moviename: data.data.moviename, description: data.data.description, actorname: data.data.actorname, directorname: data.data.directorname, releasedate: data.data.releasedate, outdate: data.data.outdate } })}>View Details</button>
                  <button onClick={() => history.push({ pathname: "/bookingform", state: { releasedate: data.data.releasedate, outdate: data.data.outdate, movieimage: data.data.image, moviename: data.data.moviename, ticketcost: data.data.ticketcost, profile: profile, name: name, email: email, password: password, mobile: mobile } })}>Book Now</button>
                  <div className="card-img-top img-fluid">
                    <img src={"https://glentreeacademy.com/wp-content/uploads/2020/12/pasted-image-0-e1608718231291.png"} style={{ width: "18rem", height: "20rem" }} />
                  </div>
                  <button onClick={() => history.push({ pathname: "/details", state: { viedourl: data.data.viedourl, moviename: data.data.moviename, description: data.data.description, actorname: data.data.actorname, directorname: data.data.directorname, releasedate: data.data.releasedate, outdate: data.data.outdate } })}>View Details</button>
                  <button onClick={() => history.push({ pathname: "/bookingform", state: { releasedate: data.data.releasedate, outdate: data.data.outdate, movieimage: data.data.image, moviename: data.data.moviename, ticketcost: data.data.ticketcost, profile: profile, name: name, email: email, password: password, mobile: mobile } })}>Book Now</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
