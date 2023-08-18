import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

import barbie from "../movie-posters/barbie.jpg";

export default function Movie(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies(){
            try {
                const response = await fetch('/api/movies');
                console.log('Response status:', response.status);
                const data = await response.json();
                console.log('Fetched data:', data);
                setMovies(data);
            } catch (error) {
                 console.error("Error fetching data", error)
            }
        }
        fetchMovies();
    }, []);

    console.log(movies);

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
                    {movies.map((movie, index) => (
                        <div key={index}>
                            <p className="movieinfo title">{movie.title}</p>
                            <p className="movieinfo director">{movie.director}</p>
                            <p className="movieinfo studio">{movie.studio}</p>
                            <p className="movieinfo genre">{movie.genre}</p>
                            <p className="movieinfo cast">{movie.cast}</p>
                            <p className="movieinfo description">{movie.description}</p>
                        </div>
                ))}
                </div>
            </div>
        </main>
    );
}