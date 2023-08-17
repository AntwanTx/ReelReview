// Content for Superhero
import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

import avengers from "../movie-posters/avengers.jpg";
import barbie from "../movie-posters/barbie.jpg";
import knives from "../movie-posters/knives-out.jpg";
import starwars from "../movie-posters/starwars.jpg";
import batman from "../movie-posters/batman.jpg";
import spiderman from "../movie-posters/spiderman.jpg";
import parasite from "../movie-posters/parasite.jpg";
import psycho from "../movie-posters/american-psycho.jpg";

function Superhero() {
    return (
        <main className="superhero">
            <NavBar />
            <div className="genrepage">
                <div className="genrefilm">
                    <img src={avengers} alt="Poster for Avengers."></img>
                    <Link className="link" to="/avengers"><h3>Avengers</h3></Link>
                </div>

                <div className="genrefilm">
                    <img src={batman} alt="Poster for Batman: The Dark Knight."></img>
                    <Link className="link" to="/batman"><h3>Batman: The Dark Knight</h3></Link>
                </div>

                <div className="genrefilm">
                    <img src={spiderman} alt="Poster for Spiderman: No Way Home."></img>
                    <Link className="link" to="/spiderman"><h3>Spiderman: No Way Home</h3></Link>
                </div>
            </div>

        </main>
    );
};

export default Superhero;