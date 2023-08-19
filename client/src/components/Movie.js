import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

import barbie from "../movie-posters/barbie.jpg"

export default function Movie(){
    return (
        <main className="movie">
            <NavBar />
            <div className="grid-container">
                <div className="grid-item col1">
                    <img src={barbie} alt="Poster for the barbie movie"></img>
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
                    <p className="movieinfo title">Title</p>
                    <p className="movieinfo director">Director</p>
                    <p className="movieinfo studio">Studio</p>
                    <p className="movieinfo genre">Genre</p>
                    <p className="movieinfo cast">Cast</p>
                    <p className="movieinfo description">Description</p>
                </div>
            </div>
        </main>
    );
}