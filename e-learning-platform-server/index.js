const express = require("express");
const cors = require("cors");

// initializing app
const app = express();

// middleware
app.use(cors());
// server port
const port = 9000;

// import data
const courses = require("./data/courses.json");

// endpoints
app.get("/", (req, res) => {
  res.send("E learning platform server !!");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  if (id <= 8) res.send(courses[id - 1]);
  else res.send("No courses found!!");
});

// server listening
app.listen(port, () => {
  console.log("E-learning platform server listening on port " + port);
});
