import React, { useState, useEffect } from "react";
import Transaction from "./Transaction";

function CustomerTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allUser", {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.users);
        console.log(result);
      });
  }, []);
  return (
    <div>
      <div style={{ paddingTop: "4rem" }}>
        <Transaction />
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>CUSTOMER DETAILS</h3>
        <div className="container" style={{ paddingTop: "2rem" }}>
          <table
            className="centered"
            style={{ border: "1px solid black", fontSize: "1.5rem" }}
          >
            <thead
              className="#212121 grey darken-4"
              style={{ fontSize: "1.5rem", color: "white" }}
            >
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Total Balance</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>₹ {item.balance}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomerTable;
