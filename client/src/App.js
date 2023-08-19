import "./App.css";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./components/HomePage";
import Movie from "./components/Movie";

import Superhero from "./components/Superhero";
import SciFi from "./components/SciFi";
import Drama from "./components/Drama";
import Comedy from "./components/Comedy";
import SelectedMovie from "./components/SelectedMovie";

const filmlist = ["avengers", "barbie", "knivesout", "starwars", "batman", "spiderman", "parasite", "americanpsycho"];


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/superhero" element={<Superhero />} />
            <Route path="/scifi" element={<SciFi />} />
            <Route path="/drama" element={<Drama />} />
            <Route path="/comedy" element={<Comedy />} />
            <Route path="/:film" element={<Movie />} />
            <Route path="/SelectedMovie" element={<SelectedMovie />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
