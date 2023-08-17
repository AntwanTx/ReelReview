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


export default function HomePage(){
    return(
        <main className="home">
            <NavBar />
            <div className="grid-container">
                    <div className="grid-item homefilm avengers">
                        <img src={avengers} alt="Poster for Avengers."></img>
                        <Link className="link" to="/avengers"><h3>Avengers</h3></Link>
                    </div>

                    <div className="grid-item homefilm barbie">
                        <img src={barbie} alt="Poster for Barbie."></img>
                        <Link className="link" to="/barbie"><h3>Barbie</h3></Link>
                    </div>

                    <div className="grid-item homefilm knives">
                        <img src={knives} alt="Poster for Knives Out."></img>
                        <Link className="link" to="/knivesout"><h3>Knives Out</h3></Link>
                    </div>

                    <div className="grid-item homefilm starwars">
                        <img src={starwars} alt="Poster for Star Wars: A New Hope."></img>
                        <Link className="link" to="/starwars"><h3>Star Wars: A New Hope</h3></Link>
                    </div>

                    <div className="grid-item homefilm batman">
                        <img src={batman} alt="Poster for Batman: The Dark Knight."></img>
                        <Link className="link" to="/batman"><h3>Batman: The Dark Knight</h3></Link>
                    </div>

                    <div className="grid-item homefilm spiderman">
                        <img src={spiderman} alt="Poster for Spiderman: No Way Home."></img>
                        <Link className="link" to="/spiderman"><h3>Spiderman: No Way Home</h3></Link>
                    </div>

                    <div className="grid-item homefilm parasite">
                        <img src={parasite} alt="Poster for Parasite."></img>
                        <Link className="link" to="/parasite"><h3>Parasite</h3></Link>
                    </div>

                    <div className="grid-item homefilm psycho">
                        <img src={psycho} alt="Poster for American Psycho."></img>
                        <Link className="link" to="/americanpsycho"><h3>American Psycho</h3></Link>
                </div>
            </div>
        </main>
    );
};