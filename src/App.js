import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import MovieTrailer from './Components/MovieTrailer';
import { movieData } from './Data';
import Dashboard from './Components/Dashboard';
import Settings from './Components/Settings';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  const [movies, setMovies] = useState(movieData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0)

  return (
    <div className="App">
      <Filter setFilterTitle={setFilterTitle} filterRating={filterRating} setFilterRating={setFilterRating} />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} setMovies={setMovies} filterTitle={filterTitle} filterRating={filterRating} />} />
        <Route path="/:title" element={<MovieTrailer movies={movies} />} />
        <Route path="/dashboard" element={
          <PrivateRoute >
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/settings" element={
          <PrivateRoute isAuth={true}>
            <Settings/>
          </PrivateRoute>

        } />
      </Routes>
    </div>
  );
}

export default App;
