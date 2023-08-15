// Content for Comedy
import React from "react";
import NavBar from "./NavBar";

import barbie from "../movie-posters/barbie.jpg";
import knives from "../movie-posters/knives-out.jpg";


function Comedy() {
    return (
        <main className="comedy">
            <NavBar />
            <div className="film barbie">
                <img src={barbie} alt="Poster for Barbie."></img>
                <h3>Barbie</h3>
            </div>

            <div className="film knives">
                <img src={knives} alt="Poster for Knives Out."></img>
                <h3>Knives Out</h3>
            </div>

        </main>
    );
};

export default Comedy;