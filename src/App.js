import './App.scss';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <input id="search-bar" placeholder="Procure por um filme..." />
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
