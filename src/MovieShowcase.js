import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((movie) =><MovieCard 
    title={movie.title}
    IMDBRating={movie.IMDBRating}
    genres={movie.genres}
    poster={movie.poster}
    />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
//the main parent which is this one imports the data from 
//data.js and in the Generate function, we call .map to iterate
//over the data and return a new array and then we pass 
//that data to the MovieCard, and set the title={movie.title}
//and so on, we then render that data.

//