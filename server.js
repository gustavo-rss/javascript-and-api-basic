const express = require("express");
const { message } = require("statuses");
const app = express();

app.get("/", function (req, res) {
  res.json({ message: "Hello, JS discovery." });
});

app.get("/avengers", function (req, res) {
  var avengers = [
    "Tony Stark",
    "Clint Barton",
    "Natasha Romanoff",
    "Steve Rogers",
    "Spider-Man",
  ];
  res.json({ data: avengers });
});

app.get("/cnh", function (req, res) {
  const age = req.query.age;

  if (!age) {
    return res.json({ message: "Age is a required field!" });
  }

  var ageNum = parseInt(age);

  if (ageNum >= 18) {
    return res.json({ message: "You can ride a car" });
  } else if (ageNum >= 5) {
    return res.json({ message: "You can ride a bicycle" });
  } else {
    return res.json({ message: "You are too young" });
  }
});

app.listen(3000);
