import MovieItem from './MovieItem.js'

function Movies({filteredMovies}) {
	var movies = filteredMovies;
	var listItems =  movies.map((m, idx) => {
    // console.log("I am here and m/idx is", m, idx);
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