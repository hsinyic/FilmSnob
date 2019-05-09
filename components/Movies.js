import MovieItem from './MovieItem.js'

function Movies({currentDB, watchedToggle}) {
	var listItems =  currentDB.map((m, idx) => ( <MovieItem key={idx.toString()} itemContent={m} 
	watchedToggle = {watchedToggle}/>));
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default Movies;