import MovieItem from './MovieItem.js'

function Movies({filteredMovies, updateWatchedList}) {
	var listItems =  filteredMovies.map((m, idx) => ( <MovieItem key={idx.toString()} itemContent={m} 
	updateWatchedList = {updateWatchedList} />));
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default Movies;