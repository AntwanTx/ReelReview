import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

import avengers from "../movie-posters/avengers.jpg";
import barbie from "../movie-posters/barbie.jpg";
import knives from "../movie-posters/knives-out.jpg";
import starwars from "../movie-posters/starwars.jpg";
import batman from "../movie-posters/batman.jpg";
import spiderman from "../movie-posters/spiderman.jpg";
import parasite from "../movie-posters/parasite.jpg";
import psycho from "../movie-posters/american-psycho.jpg";

import { title, director, studio, genre, cast, description } from "./moviedata";

const imagePaths = [avengers, barbie, knives, starwars, batman, spiderman, parasite, psycho];
const filmlist = ["avengers", "barbie", "knives-out", "starwars", "batman", "spiderman", "parasite", "american-psycho"];

export default function Movie() {
    // Get the film from the URL
    const filmFromURL = window.location.pathname.replace('/', '');

    // Find the index of the selected film
    const selectedFilmIndex = filmlist.indexOf(filmFromURL);

    return (
        <main className="movie">
            <NavBar />
            <div className="grid-container">
                <div className="grid-item col1">
                    <img src={imagePaths[selectedFilmIndex]} alt={`Poster for ${filmlist[selectedFilmIndex]} movie`} />
                </div>
                <div className="grid-item col2">
                    <div className="review">
                        <p className="username">Username</p>
                        <p>Star count</p>
                        <p className="reviewtext">Paragraph</p>
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                    </div>
                </div>
                <div className="grid-item col3">
                    <p className="movieinfo title">{title[selectedFilmIndex]}</p>
                    <p className="movieinfo director">{director[selectedFilmIndex]}</p>
                    <p className="movieinfo studio">{studio[selectedFilmIndex]}</p>
                    <p className="movieinfo genre">{genre[selectedFilmIndex]}</p>
                    <p className="movieinfo cast">{cast[selectedFilmIndex]}</p>
                    <p className="movieinfo description">{description[selectedFilmIndex]}</p>
                </div>
           </div>
        </main>
    );
}
