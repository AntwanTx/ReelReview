import React from "react";
import NavBar from "./NavBar";

import barbie from "../movie-posters/barbie.jpg";

export default function Movie(){
    return (
        <main className="film">
            <NavBar />
            <div className="col1">
                <img src={barbie} alt="Poster for the barbie movie"></img>
            </div>
            <div className="col2">
                <div className="review">
                    <h3>Username</h3>
                    <p>Star count</p>
                    <p>Paragraph</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>

                <div className="review">
                    <h3>Username</h3>
                    <p>Star count</p>
                    <p>Paragraph</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>

                <div className="review">
                    <h3>Username</h3>
                    <p>Star count</p>
                    <p>Paragraph</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className="col3">
                <h3 className="movieinfo title">Movie Title</h3>
                <p className="movieinfo director">Director</p>
                <p className="movieinfo studio">Studio</p>
                <p className="movieinfo genre">Genre</p>
                <p className="movieinfo cast">Main Cast</p>
                <p className="movieinfo description">Description</p>
            </div>
        </main>
    );
}