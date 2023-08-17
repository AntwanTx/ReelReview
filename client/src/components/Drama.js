// Content for Drama
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

function Drama() {
    return (
        <main className="drama">
            <NavBar />
            <div className="genrepage">
                <div className="genrefilm">
                    <img src={parasite} alt="Poster for Parasite."></img>
                    <Link className="link" to="/parasite"><h3>Parasite</h3></Link>
                </div>

                <div className="genrefilm">
                    <img src={knives} alt="Poster for Knives Out."></img>
                    <Link className="link" to="/knivesout"><h3>Knives Out</h3></Link>
                </div>

                <div className="genrefilm">
                    <img src={batman} alt="Poster for Batman: The Dark Knight."></img>
                    <Link className="link" to="/batman"><h3>Batman: The Dark Knight</h3></Link>
                </div>
            </div>


        </main>
    );
};

export default Drama;