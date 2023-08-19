import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

export default function Movie() {
    const [movie, setMovie] = useState({});
    const { film } = useParams();

    useEffect(() => {
        async function fetchMovie() {
            try {
                const response = await fetch(`/api/movies/${film}`);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }
        fetchMovie();
    }, [film]);

    return (
        <main className="movie">
            <NavBar />
            <div className="grid-container">
                <div className="grid-item col1">
                    <img src={movie.poster} alt={`Poster for ${movie.title} movie`} />
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
                    <p className="movieinfo title">{movie.title}</p>
                    <p className="movieinfo director">{movie.director}</p>
                    <p className="movieinfo studio">{movie.studio}</p>
                    <p className="movieinfo genre">{movie.genre}</p>
                    <p className="movieinfo cast">{movie.cast}</p>
                    <p className="movieinfo description">{movie.description}</p>
                </div>
            </div>
        </main>
    );
}



