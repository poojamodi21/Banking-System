const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../keys");
const Transaction = mongoose.model("Transaction");

router.post("/signup", (req, res) => {
  const { name, balance, email } = req.body;
  if (!name || !balance || !email) {
    return res.status(422).json({ error: "please add all the fields" });
  }
  User.findOne({ name: name }).then((savedUser) => {
    if (savedUser) {
      return res.status(422).json({ error: "user already exists" });
    }

    const user = new User({
      name,
      balance,
      email,
    });
    user
      .save()
      .then((user) => {
        res.json({ message: "saved successfully" });
      })
      .catch((error) => {
        console.log(error);
      });
  });
});

router.post("/signin", (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(422).json({ error: "Please enter Name and Password" });
  }
  User.findOne({ name: name }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid Name or Password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((Matched) => {
        if (Matched) {
          // res.json({message:"successfully signed in"})
          const token = jwt.sign({ _id: savedUser._id }, JWT_KEY);
          res.json({ token });
        } else {
          return res.status(422).json({ error: "Invalid Name or Password" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
});

router.get("/allUser", (req, res) => {
  User.find()
    .then((users) => {
      res.json({ users });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/transaction", (req, res) => {
  const { sender, receiver, amount } = req.body;
  if (!sender || !receiver || !amount) {
    return res.status(422).json({ error: "please add all the fields" });
  } else if (sender == receiver) {
    return res.status(422).json({ error: "please select different user" });
  }
  User.findOne({ name: sender }).then((senderUser) => {
    User.findOne({name:receiver}).then((receiverUser)=>{
      if (senderUser.balance < amount) {
        return res.status(422).json({ error: "Not sufficient Balance" });
      } else {
        let senderAmount=senderUser.balance- parseInt(amount)
        let receiverAmount= receiverUser.balance+ parseInt(amount)
        User.findOneAndUpdate(
          { name: sender },
          { balance: senderAmount},
          { new: true }
        ).exec((error,result)=>{
          if(error){
            return res.json({error:"error at sender"})
          }
        })
        User.findOneAndUpdate(
          { name: receiver },
          { balance:receiverAmount},
          { new: true }
        ).exec((error,result)=>{
          if(error){
            return res.json({error:"error at receiver"})
          }
        })
        const transaction = new Transaction({
          sender,
          receiver,
          amount,
          date:Date.now()
        });
        transaction
          .save()
          .then((transaction) => {
            res.json({ message: "saved successfully" });
          })
          .catch((error) => {
            console.log(error);
          });
      }

    })
    
    
  });

  
});

router.get("/allTransactions", (req, res) => {
  Transaction.find()
    .then((transactions) => {
      res.json({transactions});
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;

