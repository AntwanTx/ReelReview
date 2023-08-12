import "./App.css";
import NavBar from "./components/NavBar";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/superhero/:id" element={<Superhero />} />
                <Route path="/sciFi/:id" element={<SciFi />} />
                <Route path="/drama/:id" element={<Drama />} />
                <Route path="/comedy/:id" element={<Comedy />} />
              </Routes>
            </Router> */}

      <HomePage />
    </div>
  );
}

export default App;
