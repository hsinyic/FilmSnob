import Movies from './Movies.js';
import Search from './Search.js';
import Add from './Add.js';

class MovieList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  
        movieDataBase : this.props.exampleMovieList,
        filteredMovies : this.props.exampleMovieList,
        searchStr : "",
        addMovieStr: ""
      }
      this.updateSearchStr = this.updateSearchStr.bind(this);
      this.updatefilteredMovies = this.updatefilteredMovies.bind(this);
      this.searchMovies = this.searchMovies.bind(this);
      this.addMovie = this.addMovie.bind(this);
      this.typeMovie = this.typeMovie.bind(this);
    }


  

    updateSearchStr(e){
      // console.log(e.target.value);
      this.setState({
        searchStr: e.target.value,
      })
    }
    updatefilteredMovies(newList){
      event.preventDefault();
      this.setState({
        filteredMovies: newList,
      })
    }

    searchMovies(q){
      console.log('searching')
      event.preventDefault();
      console.log('query',q);
      console.log('existing database', this.state.movieDataBase);

      let filteredM = this.state.movieDataBase.filter(i=> i.title.includes(q));
      console.log('after filtering',filteredM);
      this.updatefilteredMovies(filteredM);
    }



    addMovie(e){
      event.preventDefault();
      console.log('now adding', this.state.addMovieStr);
      var p =  new Promise((resolve, reject)=>{
        this.setState({
            movieDataBase: this.state.movieDataBase.concat([{title : this.state.addMovieStr}])
          });
        resolve();
      }).then( ()=>{
          this.searchMovies(this.state.searchStr);
        }
      )
    }

    typeMovie(e){
      this.setState({
        addMovieStr: e.target.value,
      })
    }


    render() {
      return (
        <div className="movie-list">
        <div>
        <Movies filteredMovies = {this.state.filteredMovies}/>
        </div>
        <Search updateSearchStr = {this.updateSearchStr} updatefilteredMovies ={this.updatefilteredMovies} 
        searchMovies={this.searchMovies} />
        <Add typeMovie = {this.typeMovie} addMovie = {this.addMovie}/>
        </div>
      )
    }
}
  
MovieList.propTypes = {
  exampleMovieList: React.PropTypes.array.isRequired
};
export default MovieList;
window.MovieList=MovieList;