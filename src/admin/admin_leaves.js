import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import fire from "../files/firebase";

function Admin_Leaves() {
  const [leaves, setLeaves] = useState([]);
  useEffect(() => {
    fire
      .firestore()
      .collection("leaves")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          var data = doc.data();
          setLeaves(arr => [...arr, { data: data }]);
        });
      });
    console.log(leaves);
  }, []);
  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default Admin_Leaves;
