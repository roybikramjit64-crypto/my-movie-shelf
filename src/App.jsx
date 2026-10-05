import { useState } from 'react'

import { moviesData } from './data.js'
import MovieList from './MovieList.jsx'

import './App.css'

function App() {
  const [movies, setMovies] = useState(moviesData)

  const handleRefresh = () => setMovies(moviesData)
  const handleRemove = (id) => setMovies(movies.filter(movie => movie.id !== id))

  return (
    <div className="app-container">
      <header className="app-header">
        <h3 className="app-title">My Movie Shelf <span>- {movies.length} left</span></h3>
      </header>

      <main className="main-content">
        <MovieList movies={movies} onRemove={handleRemove} onRefresh={handleRefresh} />
      </main>

      {movies.length > 0 && (
        <footer className="app-footer">
          <button className="btn btn-clear" onClick={() => setMovies([])}>Clear All</button>
        </footer>
      )}
    </div>
  )
}

export default App
