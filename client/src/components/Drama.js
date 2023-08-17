// Content for Drama
import React from "react";
import NavBar from "./NavBar";

import parasite from "../movie-posters/parasite.jpg";
import psycho from "../movie-posters/american-psycho.jpg";


function Drama() {
    return (
        <main className="home">
            <NavBar />
            <div className="film parasite">
                <img src={parasite} alt="Poster for Parasite."></img>
                <h3>Parasite</h3>
            </div>

            <div className="film psycho">
                <img src={psycho} alt="Poster for American Psycho."></img>
                <h3>American Psycho</h3>
            </div>

        </main>
    );
};

export default Drama;