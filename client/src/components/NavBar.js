import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
        <Link className="link brand" to="/">ReelReview</Link>
          <div className="navlinks">
            <Link className="link" to="/superhero">Superhero</Link>
            <Link className="link" to="/scifi">SciFi</Link>
            <Link className="link" to="/drama">Drama</Link>
            <Link className="link" to="/comedy">Comedy</Link>
            <Link className="link" to="/SelectedMovie">Write a Review!</Link>
          </div>
    </nav>
  );
};