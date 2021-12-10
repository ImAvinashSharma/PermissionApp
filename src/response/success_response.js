import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import $ from "jquery";
import { Preview, print } from "react-html2pdf";

export const Successresponse = () => {
  const history = useHistory();
  const location = useLocation();
  const { profile, email, password, mobile, bookingdate, username, totalceats, ceatnames, name, moviename, ticketcost } = location.state;

  const downloadTicket = () => {
    print("CMRCET", "booking-pdf");
  };
  const returnHome = () => {
    history.push({ pathname: "/homepage", state: { profile: profile, name: username, email: email, password: password, mobile: mobile } });
  };

  useEffect(() => {
    $(".booking-pdf").hide();
  }, []);

  return (
    <div>
      <br />
      <div className="booking-pdf">
        <Preview id={"booking-pdf"}>
          <h1 style={{ marginLeft: "30%" }}>AK CINEMAS</h1>
          <p style={{ marginLeft: "30%" }}>Booking Date : {bookingdate}</p>
          <p style={{ marginLeft: "30%" }}>Ticket Booked By : {username}</p>
          <p style={{ marginLeft: "30%" }}>Total Ceat : {totalceats}</p>
          <p style={{ marginLeft: "30%" }}>Ceat Number : {ceatnames}</p>
          <p style={{ marginLeft: "30%" }}>Watchers : {name}</p>
          <p style={{ marginLeft: "30%" }}>Movie Name : {moviename}</p>
          <p style={{ marginLeft: "30%" }}>Total Cost : {ticketcost * totalceats}</p>
        </Preview>
      </div>
      <br />
      <button style={{ marginLeft: "27%" }} onClick={downloadTicket}>
        Download Ticket
      </button>
      <br />
      <br />
      <button style={{ marginLeft: "27%" }} onClick={returnHome}>
        Return To Home
      </button>
    </div>
  );
};
