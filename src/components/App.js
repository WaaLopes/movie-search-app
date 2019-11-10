import React, { useReducer, useEffect } from 'react';

import '../assets/Reset.css';
import '../assets/App.css';

import Header from './Header';
import Movie from './Movie';
import Search from './Search';

import { MOVIE_API_URL, MOVIE_API_KEY } from '../utils/constants';

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getApiPath = (movie) => `${MOVIE_API_URL}?s=${movie}${MOVIE_API_KEY}`;

  useEffect(() => {
    fetch(getApiPath('man'))
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: jsonResponse.Search,
        });
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: 'SEARCH_MOVIES_REQUEST',
    });

    fetch(getApiPath(searchValue))
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === 'True') {
          dispatch({
            type: 'SEARCH_MOVIES_SUCCESS',
            payload: jsonResponse.Search,
          });
        } else {
          dispatch({
            type: 'SEARCH_MOVIES_FAILURE',
            error: jsonResponse.Error,
          });
        }
      });
  };

  return (
    <div className="app">
      <Header text="Movies App" />
      <Search search={search} />
      <h3 className="list-title">Sharing a few of our favourite movies:</h3>
      <div className="movies">
        {state.errorMessage ? (
          <div className="errorMessage">{state.errorMessage}</div>
        ) : (
          <>
            {state.loading ? (
              <span>loading...</span>
            ) : (
              state.movies.map((movie) => (
                <Movie key={`${movie.imdbID}`} movie={movie} />
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
};


export default App;
