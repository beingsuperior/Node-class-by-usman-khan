const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

//middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//API for posts

app.get("/", (req, res) => {
  return res.json({
    message: "Home Route",
  });
});
app.get("/all", (req, res) => {
  return res.status(200).json({
    message: "Everything is OK",
  });
});

/*
    by query string
    localhost:5000/post/single?id=5&name=abdulRehman
*/
app.get("/post/single", (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  return res.json({
    id: id,
    name: name,
  });
});

//by params
// localhost:5000/post/5
app.get("/post/:id/:name", (req, res) => {
  const id = req.params.id;
  const name = req.params.name;
  return res.json({
    id: id,
    name: name,
  });
});

app.post("/create", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  return res.json({
    id: id,
    name: name,
  });
});
app.listen(PORT, () => {
  console.log("Server is running at PORT 5000");
});
