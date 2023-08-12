import "./App.css";
import {Routes, Route } from 'react-router-dom'
import HomePage from "./components/HomePage";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
