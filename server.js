const express = require("express");
const morgan = require("morgan");
const route = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json()); //for post request
app.use(morgan("combined"));
route(app);
app.listen(PORT, () => {
  console.log(`Example app listening on port localhost:${PORT}`);
});
