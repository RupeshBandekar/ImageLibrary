const express = require("express");
const bodyParser = require('body-parser');
var cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

// parse application/json
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use("/images", express.static("images"));

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: "An error occurred" });
});

require("./src/routes")(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});