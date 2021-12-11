import React, { useEffect, useState } from "react";
import "../bookingform.css";
import $ from "jquery";
import { useHistory, useLocation } from "react-router-dom";
import fire from "../files/firebase";
import "../movie_details.css";

export const Ticketbookingform = () => {
  const history = useHistory();
  const location = useLocation();
  const { profile, password, name, mobile, moviename, bookingdate, email } = location.state;
  const [userName, setUserName] = useState("");
  const [ceats, setceats] = useState("");
  const allSeatarray = [];
  const [bookedceats, setbookedceats] = useState([]);

  const startSelect = e => {
    e.preventDefault();
    if (name === "" || ceats === "") {
      alert("please enter name and ceats");
    } else {
      $(".inputForm *").prop("disabled", true);
      $(".seatStructure *").prop("disabled", false);
      $(".title").hide();
      $(".sub-title").hide();
      $(".inputForm *").hide();
      $(".confirm-selection").show();
      document.getElementById("notification").innerHTML = "<p class='alert-message'style='margin-bottom:0px;background:yellow;'>Please Select your Seats NOW!</p>";
      fire
        .firestore()
        .collection("movieceats")
        .where("moviename", "==", moviename)
        .where("bookingdate", "==", bookingdate)
        .get()
        .then(snapshot =>
          snapshot.forEach(ele => {
            var data = ele.data();
            console.log(data.ceatnames);
            $("#" + data.ceatnames).attr("disabled", true);
            $("#" + data.ceatnames).attr("disabled", true);
            $("#" + data.ceatnames).css("background-color", "red");
            setbookedceats(arr => [...arr, { data: data }]);
          })
        );
    }
  };

  const confirmSelection = () => {
    if ($("input:checked").length === ceats) {
      $(".seatStructure *").prop("disabled", true);
      $(".confirm-selection").hide();
      $(".pay-btn").show();
      var allNameVals = [];
      var allNumberVals = [];
      var allSeatsVals = [];

      //Storing in Array
      allNameVals.push(name);
      allNumberVals.push(ceats);
      $("#seatsBlock :checked").each(function() {
        allSeatsVals.push($(this).val());
        allSeatarray.push($(this).val());
      });

      //Displaying
      $("#nameDisplay").val(allNameVals);
      $("#NumberDisplay").val(allNumberVals);
      $("#seatsDisplay").val(allSeatsVals);
    } else {
      alert("Please select " + ceats + " seats");
    }
  };

  const paymentFunction = e => {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var fullyear = currentDate.getFullYear();
    var fulldate = day + "-0" + month + "-" + fullyear;
    e.preventDefault();
    var options = {
      handler: function(response) {
        fire
          .firestore()
          .collection("Bookings")
          .add({
            currentdate: fulldate,
            username: name,
            email: email,
            mobile: mobile,
            bookingdate: bookingdate,
            moviewatchers: name,
            totalceats: ceats,
            ceatnames: allSeatarray
          })
          .then(() => {
            fire
              .firestore()
              .collection("movieceats")
              .add({
                bookingdate: bookingdate,
                ceatnames: allSeatarray
              });
            alert("Your Booking Was Successfull");
            history.push({ pathname: "/success", state: { profile: profile, email: email, password: password, mobile: mobile, bookingdate: bookingdate, username: name, totalceats: ceats, ceatnames: allSeatarray, name: name } });
          })
          .catch(err => console.log(err));
      }
    };
  };

  useEffect(() => {
    $(".seatStructure *").prop("disabled", true);
    $(".displayerBoxes *").prop("disabled", true);
    $(".confirm-selection").hide();
  }, []);
  return (
    <div class="form-container sign-in-container" className="ticket-booking">
      <form className="ceat-pick" style={{ background: "#f6f5f7", marginTop: "32%" }}>
        <h1 className="title">Pick Ceats</h1>
        <br />
        <div className="inputForm">
          <input type="text" placeholder="Username" value={userName} onChange={e => setUserName(e.target.value)} />
          <input type="number" placeholder="Enter Number Of Ceats" value={ceats} onChange={e => setceats(e.target.value)} />
          <input type="button" value="Pick Cetas" className="pick-ceats" onClick={startSelect} />
        </div>

        <div class="seatStructure">
          <center>
            <p id="notification"></p>
            <table id="seatsBlock" style={{ marginLeft: "15%" }}>
              <tr>
                <td colspan="14">
                  <div
                    class="screen"
                    style={{
                      width: "100%",
                      height: "20px",
                      background: "#ff4b2b",
                      color: "#fff",
                      lineHeight: "20px",
                      fontSize: "15px"
                    }}
                  >
                    SCREEN
                  </div>
                </td>
                <td rowspan="20">
                  <div class="smallBox greenBox" style={{ width: "max-content" }}>
                    {" "}
                    Selected slot
                  </div>{" "}
                  <br />
                  <div class="smallBox redBox" style={{ width: "max-content" }}>
                    {" "}
                    Reserved slot
                  </div>
                  <br />
                  <div class="smallBox emptyBox" style={{ width: "max-content" }}>
                    {" "}
                    Empty slot
                  </div>
                  <br />
                </td>

                <br />
              </tr>
              <tr>
                <td></td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td></td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
              </tr>
              <tr>
                <td>HOD Office</td>
                <td>
                  <input type="checkbox" class="seats" value="A1" id="A1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A2" id="A2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A3" id="A3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A4" id="A4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A5" />
                </td>
                <td class="seatGap"></td>
                <td>
                  <input type="checkbox" class="seats" value="A6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A12" />
                </td>
              </tr>
              <tr>
                <td>Principle</td>
                <td>
                  <input type="checkbox" class="seats" value="B1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B5" />
                </td>
                <td></td>
                <td>
                  <input type="checkbox" class="seats" value="B6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B12" />
                </td>
              </tr>
              <tr>
                <td>T and P Office</td>
                <td>
                  <input type="checkbox" class="seats" value="C1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C5" />
                </td>
                <td></td>
                <td>
                  <input type="checkbox" class="seats" value="C6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C12" />
                </td>
              </tr>
              <tr>
                <td>Mentor Room</td>
                <td>
                  <input type="checkbox" class="seats" value="D1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D5" />
                </td>
                <td></td>
                <td>
                  <input type="checkbox" class="seats" value="D6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D12" />
                </td>
              </tr>
              <tr>
                <td>Physical Education</td>
                <td>
                  <input type="checkbox" class="seats" value="E1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E5" />
                </td>
                <td></td>
                <td>
                  <input type="checkbox" class="seats" value="E6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E12" />
                </td>
              </tr>
            </table>
            <br />
            <input type="button" value="Confirm Selection" className="confirm-selection" id="con-select" onClick={confirmSelection} onclick="updateTextArea()" />
          </center>
        </div>
        <br />
        <br />
        <div class="displayerBoxes">
          <center>
            <table class="Displaytable" style={{ marginLeft: "auto", marginRight: "auto" }}>
              <tr>
                <th>Name</th>
                <th>Number of slots</th>
                <th>slots</th>
              </tr>
              <tr>
                <td>
                  <textarea id="nameDisplay"></textarea>
                </td>
                <td>
                  <textarea id="NumberDisplay"></textarea>
                </td>
                <td>
                  <textarea id="seatsDisplay"></textarea>
                </td>
              </tr>
            </table>
          </center>
        </div>
      </form>
      <br />
      <button className="pay-btn" style={{ marginLeft: "39%" }} onClick={paymentFunction}>
        Done
      </button>
    </div>
  );
};
