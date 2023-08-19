// Content for Homepage
import React from "react";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

import avengers from "../movie-posters/avengers.jpg";
import barbie from "../movie-posters/barbie.jpg";
import knives from "../movie-posters/knives-out.jpg";
import starwars from "../movie-posters/starwars.jpg";
import batman from "../movie-posters/batman.jpg";
import spiderman from "../movie-posters/spiderman.jpg";
import parasite from "../movie-posters/parasite.jpg";
import psycho from "../movie-posters/american-psycho.jpg";

const imagePaths = [avengers, barbie, knives, starwars, batman, spiderman, parasite, psycho];
const filmlist = ["avengers", "barbie", "knives-out", "starwars", "batman", "spiderman", "parasite", "american-psycho"];

export default function HomePage() {
    function formatFilmTitle(title) {
        const words = title.split('-');
        const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return formattedWords.join(' ');
      }
    return (
        <main className="home">
            <NavBar />
            <div className="grid-container">
                {filmlist.map((film, index) => (
                    <div className={`grid-item homefilm ${film}`} key={index}>
                          <img src={imagePaths[index]} alt={`Poster for ${film}.`} />
                        <Link className="link" to={`/${film}`}>
                        <h3>{formatFilmTitle(film)}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}