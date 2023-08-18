const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/movieCommentsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

