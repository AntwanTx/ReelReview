import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

// this is a way to add mongo so i can use it for the movie app


// const express = require('express');
// const cors = require('cors');
// const app = express();
// const mongoose = require('mongoose');
// const movieRoutes = require('./routes/movieRoutes');

// // middleware
// app.use(cors()); 
// app.use(express.json());
// app.use(movieRoutes);

// // connect to mongoDB
// mongoose.connect('mongodb://localhost:27017/moviesdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Mongodb connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// })

// // start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// })

// this is the end of that code i just added

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
