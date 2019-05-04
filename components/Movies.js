import MovieItem from './MovieItem.js'

function Movies({filteredMovies}) {
	var movies = filteredMovies;
	var listItems =  movies.map((m, idx) => {
    	return <MovieItem key={idx.toString()} itemContent={m} />
		}
  );
  return (
    <ul>
      {listItems}
    </ul>
  );

}

export default Movies;