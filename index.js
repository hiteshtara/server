const express = require("express");
const app = express();
// generates a new application all the route handesrs will be associateed with app.
//second argument is arrow function gets called by express when incoming request hits /
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});
// it wants to listen  to 5000 on your machine routed through node to express
const PORT = process.env.PORT || 5000;
// heroku will inject port ||5000;
app.listen(PORT);
