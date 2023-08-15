// Content for SciFi
import React from "react";
import Navbar from 'Navbar';

import starwars from "../movie-posters/starwars.jpg"


function SciFi() {
    return (
        <main className="home">
            <div className="film starwars">
                <img src={starwars} alt="Poster for Star Wars: A New Hope."></img>
                <h3>Star Wars: A New Hope</h3>
            </div>

        </main>
    );
};

export default SciFi;