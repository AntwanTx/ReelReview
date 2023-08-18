import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

import barbie from "../movie-posters/barbie.jpg";

export default function Movie(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch('/api/movies');
                console.log('Response status:', response.status);
                const data = await response.json();
                console.log('Fetched data:', data);
                setMovies(data);
            } catch (error) {
                console.error('Error fetching data', error);
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
                    <p className="movieinfo title">{movies[0]?.title}</p>
                    <p className="movieinfo director">{movies[0]?.director}</p>
                    <p className="movieinfo studio">{movies[0]?.studio}</p>
                    <p className="movieinfo genre">{movies[0]?.genre}</p>
                    <p className="movieinfo cast">{movies[0]?.cast}</p>
                    <p className="movieinfo description">{movies[0]?.description}</p>
                </div>
            </div>
        </main>
    );
}