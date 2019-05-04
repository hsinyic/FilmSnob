import Movies from './Movies.js';
import Search from './Search.js';
import Add from './Add.js';

class MovieList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  
        movieDataBase : this.props.exampleMovieList,
        filteredMovies : this.props.exampleMovieList,
        searchStr : "*"
      }
      this.updateSearchStr = this.updateSearchStr.bind(this);
      this.updatefilteredMovies = this.updatefilteredMovies.bind(this);
      this.searchMovies = this.searchMovies.bind(this);
    }

    updateSearchStr(e){
      // console.log(e.target.value);
      this.setState({
        searchStr: e.target.value,
      })
      console.log(this.state.searchStr);
      // this.searchMovies(this.state.searchStr);
    }
    updatefilteredMovies(newList){
      this.setState({
        filteredMovies: newList,
      })
    }

    searchMovies(q){
      console.log(q);
      console.log(this.state.movieDataBase);
      let filteredM = this.state.movieDataBase.filter(i=> i.title.includes(q));
      console.log(filteredM);
      this.updatefilteredMovies(filteredM);
    }

    render() {
      return (
        <div className="movie-list">
        <div>
        <Movies filteredMovies = {this.state.filteredMovies}/>
        </div>
        <Search updateSearchStr = {this.updateSearchStr} updatefilteredMovies ={this.updatefilteredMovies} searchMovies={this.searchMovies} />
        <Add />
        </div>
      )
    }
}
  
MovieList.propTypes = {
  exampleMovieList: React.PropTypes.array.isRequired
};
export default MovieList;
window.MovieList=MovieList;