import React, { Component } from 'react';

import MovieCard from './../../components/MovieCard';
import SearchBar from './../../components/SearchBar';
import MovieAPI from './../../services/MovieAPI';

class Home extends Component {

    state = {
        movies: []
    }
    
    onSearch(title){

        if(!title){
            this.setState({
                movies: []
            })
            
            return;
        }

        MovieAPI.searchMovies(title)
            .then((data) => {
                this.setState({
                    movies: Array.from(data.data.results)
                        .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
                        .map(x => ({
                            ...x,
                            id: x.title + x.release_date
                        }))
                })
            });
    }

    render(){
        return (
            <>
                <SearchBar onSearch={(title) => this.onSearch(title)}/>
                <div className="movie-wrapper">
                    { this.state.movies.map(movie => <MovieCard movie={movie} />) }
                </div>
            </>
        );
    }
}

export default Home;
