import React, { Component } from 'react'
import './movieCard.scss'
import HeartSvg from './../../svg/heart';
import HeartFullSvg from './../../svg/heart-full';
class MovieCard extends Component {

    render(){

        let movie = this.props.movie;
        movie.image = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        
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