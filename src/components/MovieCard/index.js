import React, { Component } from 'react'
import './movieCard.scss'
import HeartSvg from './../../svg/heart';
import HeartFullSvg from './../../svg/heart-full';
class MovieCard extends Component {

    render(){

        let movie = {
            title: 'Star Wars - The Force Awakens',
            year: 2018,
            favorite: false,
            image: 'https://img.elo7.com.br/product/original/2C25D05/big-poster-filme-star-wars-o-despertar-da-forca-tam-90x60-cm-poster-star-wars.jpg'
        }

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