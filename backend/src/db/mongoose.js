const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://reelreview:Jj4Vrsk6JQr6Y87c@cluster0.4hnwy2r.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to MongoDB");
  }).catch((error) => {
    console.error("Error connecting to MongoDB", error);
  })

// database link: "mongodb+srv://reelreview:Jj4Vrsk6JQr6Y87c@cluster0.4hnwy2r.mongodb.net/?retryWrites=true&w=majority
// compass connect link: mongodb+srv://reelreview:Jj4Vrsk6JQr6Y87c@cluster0.4hnwy2r.mongodb.net/
  