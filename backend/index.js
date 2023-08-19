require("./src/db/mongoose");
const express = require("express");
const Comment = require("./src/models/comment");
const port = process.env.PORT || 4000;

const moviedata = require("../data/moviedata");

// middleware
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
})

// create a new comment

app.post('/submit', async (req, res) => {
    const comment = new Comment(req.body);
    try {
       await comment.save();
       res.status(201).send(comment);
    } catch (error) {
      res.status(400).send(error);
    }
    res.send('POST request received');
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

app.get('/api/movies', (req, res) => {
  res.json(moviedata);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });