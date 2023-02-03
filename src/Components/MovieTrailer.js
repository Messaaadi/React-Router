import React from 'react'
import { Link, useParams } from 'react-router-dom'
import YouTube from 'react-youtube';


const MovieTrailer = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((elem) => elem.title === title);
  

  return (
    <div>
      <Link to="/"><button>Go Back Home</button></Link>
      <h1> Watch: {movie.title} </h1>
      <img style={{ width: 380 }} src={movie.posterUrl} alt={movie.title} />
      <p>Description: {movie.description}</p>
      <YouTube videoId={movie.trailer} />
      
    </div>
  )
}

export default MovieTrailer