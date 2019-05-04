import exampleMovieList from './data/exampleData.js';
import MovieList from './components/MovieList.js';


ReactDOM.render(<MovieList exampleMovieList = {exampleMovieList}/>,
    document.getElementById('list')
);
  
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('list')
// );

