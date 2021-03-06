import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import fire from "../files/firebase";

function Form() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [rno, setRno] = useState("");
  const [permission, setPermission] = useState("");
  const [noPeriods, setNoPeriods] = useState("");
  const [course, setCourse] = useState("BTech");
  const [branch, setBranch] = useState("CSE");
  const handleSubmit = async e => {
    e.preventDefault();
    await fire
      .firestore()
      .collection("leaves")
      .add({ name, rno, permission, noPeriods, course, branch });
    history.push("/homepage");
    console.log(course, branch);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          H.T.No.
          <input type="text" name="rno" onChange={e => setRno(e.target.value)} />
        </label>
        <br />
        <label>
          Course
          <select
            value={course}
            onChange={e => {
              setCourse(e.target.value);
            }}
          >
            <option value="BTech">BTech</option>
            <option value="MBA">MBA</option>
          </select>
        </label>
        <br />
        {course === "BTech" ? (
          <>
            <label>
              Branch
              <select
                value={branch}
                onChange={e => {
                  setBranch(e.target.value);
                }}
              >
                <option value="H&S">H&S</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="CSE-DS">CSE-DS</option>
                <option value="CSE-CS">CSE-CS</option>
                <option value="CSE-AI&ML">CSE-AI&ML</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="CIVIL">CIVIL</option>
                <option value="MECH">MECH</option>
              </select>
            </label>
            <br />
          </>
        ) : (
          ""
        )}
        <br />
        <label>
          Number of periods
          <input type="number" name="period" min="1" max="6" placeholder="periodc (between 1 and 6):" onChange={e => setNoPeriods(e.target.value)} />
        </label>
        <br />

        <label>
          Permission for
          <textarea type="text" onChange={e => setPermission(e.target.value)} />
        </label>
        <br />
        {name && rno && course && branch && noPeriods && permission ? (
          <div>
            <h1>Conform Your Details</h1>
            <h3>Name: {name}</h3>
            <h3>H.T.No.: {rno}</h3>
            <h3>Course: {course}</h3>
            <h3>Branch: {branch}</h3>
            <h3>Permission for: {permission}</h3>
            <h3>Number of periods: {noPeriods}</h3>
            <input type="submit" value="Submit" />
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default Form;
