import MovieItem from './MovieItem.js'

function Movies({filteredMovies}) {
	var listItems =  filteredMovies.map((m, idx) => ( <MovieItem key={idx.toString()} itemContent={m} />));
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default Movies;