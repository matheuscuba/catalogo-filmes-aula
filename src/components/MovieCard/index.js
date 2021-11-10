import React, { Component } from 'react'
import './movieCard.scss'
import HeartSvg from './../../svg/heart';
import HeartFullSvg from './../../svg/heart-full';
const NO_IMAGE = 'https://via.placeholder.com/180x240';

class MovieCard extends Component {

    render(){

        let movie = this.props.movie;

        if(movie.poster_path) {
            movie.image = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        } else {
            movie.image = NO_IMAGE;
        }
        
        let releaseDate = new Date(movie.release_date);
        movie.year = releaseDate.getUTCFullYear();

        let style = {
            backgroundImage: 'url('+ movie.image +')'
        }

        return(
            <div className="movie-card" style={style}>
                <button>
                    <HeartSvg className="heart" width={25} height={25} />
                </button>
                <h4>{movie.title}</h4>
                <span>{movie.year}</span>
            </div>
        )
    }
}

export default MovieCard;