import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../movie_details.css";

export const Bookingform = () => {
  const history = useHistory();
  const location = useLocation();
  const { profile, password, username, mobile, email } = location.state.profile;

  const [bookingdate, setbookingdate] = useState("");
  const selectCeats = e => {
    e.preventDefault();
    if (username === "" || bookingdate === "") {
      alert("please select booking date");
    } else {
      history.push({ pathname: "/pickceat", state: { profile: profile, email: email, username: username, mobile: mobile, bookingdate: bookingdate, password: password } });
    }
  };
  return (
    <div class="form-container sign-in-container" className="movie-container">
      <form style={{ background: "#f6f5f7" }}>
        <h1>Permission request</h1>
        <br />
        <input type="text" placeholder="Username" value={username} />
        <input type="date" placeholder="Pick Date" max={null} min={null} value={bookingdate} onChange={e => setbookingdate(e.target.value)} />
        <br />
        <button onClick={selectCeats}>Select Slots</button>
      </form>
    </div>
  );
};
