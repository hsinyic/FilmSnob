import exampleMovieList from './data/exampleData.js';
import MovieList from './components/MovieList.js';


var movieDB = exampleMovieList.map( (i)=> {
    i.added = false;
    i.watched = false;
    i.show = true;
    i.filter = true;
    return i;
  })

ReactDOM.render(<MovieList movieDB = {movieDB}/>,
    document.getElementById('list')
);
  
