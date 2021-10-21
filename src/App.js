import './App.scss';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="movie-wrapper">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default App;
