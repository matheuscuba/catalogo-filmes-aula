import React, { Component } from 'react'
import './movieCard.scss'
import HeartSvg from './../../svg/heart';
import HeartFullSvg from './../../svg/heart-full';
import { adicionarFavorito, removerFavorito } from './../../store/reducers/favoritos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const NO_IMAGE = 'https://via.placeholder.com/180x240';

class MovieCard extends Component {

    state = {
        isFavorite: false
    }

    constructor(props){
        super(props);

        let movie = this.props.movie;
        let isFavorite = Array.from(this.props.listaFavoritos)
            .find(x => x.id == movie.id);

        this.state.isFavorite = isFavorite;
    }

    toggleFavorito(){
        let movie = this.props.movie;
        
        if(this.state.isFavorite) {
            this.props.removerFavorito(movie.id);
        } else {
            this.props.adicionarFavorito(movie);
        }

        this.setState({
            isFavorite: !this.state.isFavorite
        });
    }

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
            <div className="movie-card" style={style} onClick={() => this.toggleFavorito()}>
                <button>
                    { this.state.isFavorite
                        ? <HeartFullSvg className="heart" width={25} height={25} /> 
                        : <HeartSvg className="heart" width={25} height={25} />
                    }
                </button>
                <h4>{movie.title}</h4>
                <span>{movie.year}</span>
            </div>
        )
    }
}

const mapStateToProps = ({ favoritos }) => ({
    listaFavoritos: favoritos.favoritos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      adicionarFavorito,
      removerFavorito
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);