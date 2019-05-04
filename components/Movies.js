import MovieItem from './MovieItem.js'

function Movies(props) {
	var movies = props.exampleMovieList;
	var listItems =  movies.map((m, idx) => {
		console.log("I am here and m/idx is", m, idx);
    	return <MovieItem key={idx.toString()} itemContent={m} />
		}
    );
  return (
    <ul>
      {listItems}
    </ul>
  );
 return;
}

export default Movies;