// Content for Homepage
import React from "react";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

export default function HomePage(){
    return(
        <main className="home">
            <NavBar />
            <div className="grid-container">
                    <div className="grid-item avengers">
                        <img src={avengers} alt="Poster for Avengers."></img>
                        <Link to="/barbie"><h3>Avengers</h3></Link>
                    </div>

                    <div className="grid-item barbie">
                        <img src={barbie} alt="Poster for Barbie."></img>
                        <Link to="/barbie"><h3>Barbie</h3></Link>
                    </div>

                    <div className="grid-item knives">
                        <img src={knives} alt="Poster for Knives Out."></img>
                        <Link to="/barbie"><h3>Knives Out</h3></Link>
                    </div>

                    <div className="grid-item starwars">
                        <img src={starwars} alt="Poster for Star Wars: A New Hope."></img>
                        <Link to="/barbie"><h3>Star Wars: A New Hope</h3></Link>
                    </div>

                    <div className="grid-item batman">
                        <img src={batman} alt="Poster for Batman: The Dark Knight."></img>
                        <Link to="/barbie"><h3>Batman: The Dark Knight</h3></Link>
                    </div>

                    <div className="grid-item spiderman">
                        <img src={spiderman} alt="Poster for Spiderman: No Way Home."></img>
                        <Link to="/barbie"><h3>Spiderman: No Way Home</h3></Link>
                    </div>

                    <div className="grid-item parasite">
                        <img src={parasite}  alt="Poster for Parasite."></img>
                        <Link to="/barbie"><h3>Parasite</h3></Link>
                    </div>

                    <div className="grid-item psycho">
                        <img src={psycho} alt="Poster for American Psycho."></img>
                        <Link to="/barbie"><h3>American Psycho</h3></Link>
                </div>
            </div>
        </main>
    );
};