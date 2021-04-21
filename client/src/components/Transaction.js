import { useState, useEffect } from "react";
import M from "materialize-css";
function Transaction() {
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
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const transfer = () => {
    fetch("/transaction", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        sender,
        receiver,
        amount,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          M.toast({ html: data.message, classes: "#4caf50 green" });
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="row card center fixed">
        <div class="input-field col s3">
          <select
            value={sender}
            onChange={(e) => {
              setSender(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Sender
            </option>
            <option value="John">John</option>
            <option value="Jenny">Jenny</option>
            <option value="Suresh">Suresh</option>
            <option value="Geeta">Geeta</option>
            <option value="Shreya">Shreya</option>
            <option value="Aashka">Aashka</option>
            <option value="Lisa">Lisa</option>
            <option value="Monica">Monica</option>
            <option value="Anusha">Anusha</option>
            <option value="Rohan">Rohan</option>
          </select>
          <label>Sender</label>
        </div>
        <div class="input-field col s3">
          <select
            value={receiver}
            onChange={(e) => {
              setReceiver(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Receiver
            </option>
            <option value="John">John</option>
            <option value="Jenny">Jenny</option>
            <option value="Suresh">Suresh</option>
            <option value="Geeta">Geeta</option>
            <option value="Shreya">Shreya</option>
            <option value="Aashka">Aashka</option>
            <option value="Lisa">Lisa</option>
            <option value="Monica">Monica</option>
            <option value="Anusha">Anusha</option>
            <option value="Rohan">Rohan</option>
          </select>
          <label>Receiver</label>
        </div>
        <div className="col s3">
          <label for="amount">Amount</label>
          <input
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Amount"
            type="text"
            id="amount"
          />
        </div>
        <div className="col s3">
          <button
            onClick={() => transfer()}
            style={{ margin: "20px" }}
            className="btn-large"
          >
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
