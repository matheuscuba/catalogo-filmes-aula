import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieCard from '../../components/MovieCard';

// import { Container } from './styles';

class Favoritos extends Component {
    render() {
        return (
            <div className="movie-wrapper">
                { this.props.listaFavoritos.map((movie, i ) => (
                    <MovieCard movie={movie} />
                )) }
            </div>
        );
    }
}

const mapStateToProps = ({ favoritos }) => ({
    listaFavoritos: favoritos.favoritos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({

  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favoritos);