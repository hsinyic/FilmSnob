import Movies from './Movies.js'

class MovieList extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="movie-list">
          {/* <h1>Movie List for big meow</h1> */}
          <Movies exampleMovieList = {this.props.exampleMovieList}/>
        </div>
      )
    }
}
  
MovieList.propTypes = {
  exampleMovieList: React.PropTypes.array.isRequired
};
export default MovieList;
window.MovieList=MovieList;