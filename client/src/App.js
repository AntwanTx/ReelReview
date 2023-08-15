import "./App.css";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./components/HomePage";
import Layout from "./Layout";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/superhero" element={<p>Stub</p>} />
            <Route path="/scifi" element={<p>Stub</p>} />
            <Route path="/drama" element={<p>Stub</p>} />
            <Route path="/comedy" element={<p>Stub</p>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
