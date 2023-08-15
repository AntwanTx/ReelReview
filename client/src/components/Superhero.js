// Content for Superhero
import React from "react";
import NavBar from "./NavBar";


import avengers from "../movie-posters/avengers.jpg";
import batman from "../movie-posters/batman.jpg";
import spiderman from "../movie-posters/spiderman.jpg";


function Superhero() {
    return (
        <main className="superhero">
            <NavBar />
            <div className="film avengers">
                <img src={avengers} alt="Poster for Avengers."></img>
                <h3>Avengers</h3>
            </div>

            <div className="film batman">
                <img src={batman} alt="Poster for Batman: The Dark Knight."></img>
                <h3>Batman: The Dark Knight</h3>
            </div>

            <div className="film spiderman">
                <img src={spiderman} alt="Poster for Spiderman: No Way Home."></img>
                <h3>Spiderman: No Way Home</h3>
            </div>

        </main>
    );
};

export default Superhero;