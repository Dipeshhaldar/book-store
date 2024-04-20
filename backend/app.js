const express = require("express");
const app = express();
const cors = require("cors");
const bookRoute = require("./routes/booksRoutes");
require("./connection/conn");
app.use(cors());
app.use(express.json());
app.use("/bookstore", bookRoute);

app.listen(8000, () => {
  console.log("SERVER STARTED SUCCESSFULLY");
});
