import React from "react";
import Transaction from "./Transaction";
import { useState, useEffect } from "react";

function TransactionTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allTransactions", {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.transactions);
        console.log(result);
      });
  }, []);
  return (
    <div>
      <div>
        <h3 style={{ textAlign: "center" }}>TRANSACTIONS</h3>
        <div className="container" style={{ paddingTop: "2rem" }}>
          <table
            className="striped"
            className="centered"
            style={{ border: "1px solid black", fontSize: "1.5rem" }}
          >
            <thead
              className="#212121 grey darken-4"
              style={{ fontSize: "1.5rem", color: "white" }}
            >
              <tr>
                <th>SENDER</th>
                <th>RECEIVER</th>
                <th>AMOUNT</th>
                <th>DATE AND TIME</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td>{item.sender}</td>
                    <td>{item.receiver}</td>
                    <td>₹ {item.amount}</td>
                    <td> {item.date}</td>
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

export default TransactionTable;
