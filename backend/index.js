require("./src/db/mongoose");
const port = process.env.PORT || 4000;
const express = require("express");
const cors = require("cors");
const Comment = require("./src/models/comment");
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // This should come before defining routes

// // Database connection
// mongoose.connect("mongodb+srv://reelreview:Jj4Vrsk6JQr6Y87c@cluster0.4hnwy2r.mongodb.net/?retryWrites=true&w=majority")

app.get("/", (req, res) => {
  res.send("Hello World!");
})
 
// create a new comment
app.post('/submit', async (req, res) => {
  const { name, comment, rating, selectedMovie} = req.body;
  const commentDoc = await Comment.create({name, comment, rating, selectedMovie});
  res.json(commentDoc);

  
    // const comment = new Comment(req.body);
    // try {
    //    await comment.save();
    //    res.status(201).send(comment);
    // } catch (error) {
    //   res.status(400).send(error);
    // }
    // res.send('POST request received');
  });

// get all comments
app.get("/comment",async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).send(comments);
  } catch (error) {
    res.status(400).send(error);
  }
    
  })

// get one comment
app.get("/comment/:id", (req, res) => {
  Comment.findById(req.params.id).then((comment) => {
    res.send(comment);
  }).catch((error) => {
    res.status(400).json({'error':'The comment does not exist.'});
    // res.status(400).send(error);
  })
});

// update a comment
app.put("/comment/:id", (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body).then((comment) => {
    res.send(comment);
  }).catch((error) => {
    res.status(400).send(error);
  })
})

// delete a comment
app.delete("/comment/:id", (req, res) => {
  Comment.findByIdAndDelete(req.params.id).then((comment) => {
    res.send(comment);
  }).catch((error) => {
    res.status(400).send(error);
  })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });