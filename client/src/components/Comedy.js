// Content for Comedy
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

function Comedy() {
    return (
        <main className="comedy">
            <NavBar />
            <div className="genrepage">
                <div className="genrefilm">
                    <img src={barbie} alt="Poster for Barbie."></img>
                    <Link className="link" to="/barbie"><h3>Barbie</h3></Link>
                </div>

                <div className="genrefilm">
                    <img src={knives} alt="Poster for Knives Out."></img>
                    <Link className="link" to="/knivesout"><h3>Knives Out</h3></Link>
                </div>

                <div className="genrefilm">
                    <img src={psycho} alt="Poster for American Psycho."></img>
                    <Link className="link" to="/americanpsycho"><h3>American Psycho</h3></Link>
                </div>
            </div>
        </main>
    );
};

export default Comedy;