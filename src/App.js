import React, { useState } from 'react';
import './App.css';
import MovieCard from './components/moviecard';
import Filter from './components/filter';
import img1 from './components/assets/shawshank.jpg';
import img2 from './components/assets/darkknight.jpg';
import img3 from './components/assets/interstellar.jpg';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'The Shawshank Redemption',
      description: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
      posterURL: img1,
      rating: 9.3,
      trailer:'https://www.imdb.com/title/tt0111161/?ref_=chttp_t_1',
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: img2,
      rating: 9.0,
      trailer: 'https://www.imdb.com/title/tt0468569/?ref_=chttp_t_3',
    },
    {
      title: 'Interstellar',
      description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
      posterURL: img3,
      rating: 8.7,
      trailer:'https://www.imdb.com/title/tt0816692/?ref_=chttp_t_23',
    },
    // Add more movie objects here
    
  ]);
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRateChange = (e) => {
    setRateFilter(e.target.value);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <>
    <div className="app">
      <h1 className='tit' style={{textAlign: 'center', color: 'red'}}>Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        rateFilter={rateFilter}
        handleTitleChange={handleTitleChange}
        handleRateChange={handleRateChange}
      />
      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <button
        onClick={() => addMovie({
          title: 'Movie Name',
          description: 'Description for New Movie',
          posterURL: 'new-movie.jpg',
          rating: 4.0,
          trailer:'',
          
        })}
      >
        Add New Movie
      </button>
    </div>
    </>
  );
};

export default App;
