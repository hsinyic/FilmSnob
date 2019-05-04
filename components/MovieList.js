import Movies from './Movies.js'

class MovieList extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="movie-list">
          <h1>Movie List for big meow</h1>
          <ul>
              <Movies exampleMovieList = {this.props.exampleMovieList}/>
          </ul>
        </div>
      );
    }
  }
  
