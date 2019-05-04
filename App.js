import exampleMovieList from './data/exampleData.js';
import MovieList from './components/MovieList.js';


ReactDOM.render(<MovieList exampleMovieList = {exampleMovieList}/>,
    document.getElementById('list')
);
  
