const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Dipesh:Komal@cluster0.tcp2bgj.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected"));
