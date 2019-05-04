import Movies from './Movies.js'

class MovieList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        matchedMovies : this.props.exampleMovieList,
        searchStr : "*"
      }
    }

    updateSearchStr(e){
      this.setState({
        searchStr: e,
      })
    }

    render() {
      return (
        <div className="movie-list">
          {/* <h1>Movie List for big meow</h1> */}
          <Movies exampleMovieList = {this.state.matchedMovies} updateSearchStr = {this.updateSearchStr}/>
        </div>
      )
    }
}
  
MovieList.propTypes = {
  exampleMovieList: React.PropTypes.array.isRequired
};
export default MovieList;
window.MovieList=MovieList;