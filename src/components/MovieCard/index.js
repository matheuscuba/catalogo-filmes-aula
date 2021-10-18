import React, { Component } from 'react'
import './movieCard.scss'

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

            </div>
        )
    }
}

export default MovieCard;