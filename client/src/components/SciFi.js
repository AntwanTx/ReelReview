// Content for SciFi
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

function SciFi() {
    return (
        <main className="scifi">
            <NavBar />
            <div className="genrepage">

            <div className="genrefilm">
                    <img src={avengers} alt="Poster for Avengers."></img>
                    <Link className="link" to="/avengers"><h3>Avengers</h3></Link>
                </div>

                <div className="genrefilm">
                    <img src={starwars} alt="Poster for Star Wars: A New Hope."></img>
                    <Link className="link" to="/starwars"><h3>Star Wars: A New Hope</h3></Link>
                </div>


            </div>
        </main>
    );
};

export default SciFi;