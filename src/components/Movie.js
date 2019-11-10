import React from 'react';
import PropTypes from 'prop-types';

import '../assets/Movie.css';

import { DEFAULT_PLACEHOLDER_IMAGE } from '../utils/constants';

const Movie = ({ movie }) => {
  const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <a
      className="movie"
      href={`https://www.imdb.com/title/${movie.imdbID}/`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="movie-image"
        width="200"
        alt={`The movie titled: ${movie.Title}`}
        src={poster}
      />
      <p className="movie-title">
        {`${movie.Title} - ${movie.Year}`}
      </p>
    </a>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
  }).isRequired,
};


export default Movie;
