// Content for Homepage
import React from "react";

import avengers from "../movie-posters/avengers.jpg";
import barbie from "../movie-posters/barbie.jpg";
import knives from "../movie-posters/knives-out.jpg";
import starwars from "../movie-posters/starwars.jpg";
import batman from "../movie-posters/batman.jpg";
import spiderman from "../movie-posters/spiderman.jpg";
import parasite from "../movie-posters/parasite.jpg";
import psycho from "../movie-posters/american-psycho.jpg";
import NavBar from "./NavBar";


export default function HomePage(){
    return(
    <div>
        <NavBar />
        <main className="home">
            <div className="film avengers">
            <img src={avengers} alt="Poster for Avengers."></img>
            <h3>Avengers</h3>
            </div>

            <div className="film barbie">
            <img src={barbie} alt="Poster for Barbie."></img>
            <h3>Barbie</h3>
            </div>

            <div className="film knives">
            <img src={knives} alt="Poster for Knives Out."></img>
            <h3>Knives Out</h3>
            </div>

            <div className="film starwars">
            <img src={starwars} alt="Poster for Star Wars: A New Hope."></img>
            <h3>Star Wars: A New Hope</h3>
            </div>

            <div className="film batman">
            <img src={batman} alt="Poster for Batman: The Dark Knight."></img>
            <h3>Batman: The Dark Knight</h3>
            </div>

            <div className="film spiderman">
            <img src={spiderman} alt="Poster for Spiderman: No Way Home."></img>
            <h3>Spiderman: No Way Home</h3>
            </div>

            <div className="film parasite">
            <img src={parasite}  alt="Poster for Parasite."></img>
            <h3>Parasite</h3>
            </div>

            <div className="film psycho">
            <img src={psycho} alt="Poster for American Psycho."></img>
            <h3>American Psycho</h3>
            </div>
        </main>
    </div>
    );
};