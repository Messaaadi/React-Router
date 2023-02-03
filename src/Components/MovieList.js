import React from "react";
import { Link } from "react-router-dom";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, setMovies, filterTitle, filterRating }) => {
    return (
        <div>
            <div>
                <AddMovie movies={movies} setMovies={setMovies} />
            </div>
            <div className="movie-list">
                {movies
                    .filter(
                        (movie) =>
                            movie.title
                                .toLowerCase()
                                .trim()
                                .includes(filterTitle.toLowerCase().trim()) &&
                            movie.rating >= filterRating
                    )
                    .map((movie) => (
                        <div key={movie.id} >
                            <Link to={`${movie.title}`}>
                                <MovieCard key={movie.id} movie={movie} />
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MovieList;
