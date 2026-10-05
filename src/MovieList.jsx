import './MovieList.css'

const MovieList = ({movies, onRemove, onRefresh}) => {
  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-text">No movies in the shelf</p>
        <button className="btn btn-refresh" onClick={onRefresh}>↺ Refresh List</button>
      </div>
    )
  }

  return (
    <div className="movie-list">
      {movies.map(movie => {
        const {id, name, year, rating, photo, link} = movie

        return (
          <article key={id} className="movie-card">
            <img className="movie-poster" src={photo} alt={name} onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/75x110?text=No+Image";
            }} />
            <div className="movie-info">
              <h4 className="movie-title">{name}</h4>
              <div className="movie-meta">
                <span className="movie-rating">⭐ {rating}</span>
                <span className="movie-year">{year}</span>
              </div>
              <div className="movie-actions">
                <button className="btn btn-remove" onClick={() => onRemove(id)}>Remove</button>
                <a className="btn btn-watch" href={link} target="_blank" rel="noopener noreferrer">▶️ Watch</a>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default MovieList