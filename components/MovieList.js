import Movies from './Movies.js';
import Search from './Search.js';
import Add from './Add.js';
import searchMovieDB from '../searchMovieDB.js'

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDataBase: this.props.movieDB,
      currentDB: this.props.movieDB,
      searchStr: "",
      addMovieStr: "",
      activateWatched: false,
      showWatched: false,
      showAddOnly: false
    }
    this.typeSearch = this.typeSearch.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.typeMovie = this.typeMovie.bind(this);
    this.watchedToggle = this.watchedToggle.bind(this);
    this.viewWatch = this.viewWatch.bind(this);
  }

  componentDidMount() {
  }
  typeSearch(e) {
    e.preventDefault();
    this.setState({ searchStr: e.target.value })
  }

  typeMovie(e) {
    e.preventDefault();
    this.setState({ addMovieStr: e.target.value })
  }

  updateDB() {
    var m = this.state.movieDataBase.map(i => {
      var showW = this.state.activateWatched ? (this.state.showWatched ? i.watched : !i.watched) : true;
      var showAdd = this.state.showAddOnly ? i.showAdd : !i.showAdd;
      i.show = [showW, i.filter].reduce((i, j) => i && j);
      return i;
    })
    this.setState({
      currentDB: m.filter(i => i.show),
    })
  }
  searchMovies() {
    searchMovieDB(this.state.searchStr);
    // return new Promise((resolve, reject) => {
    //   var q = this.state.searchStr;
    //   resolve(q);
    // }).then((q) => {
    //   var m = this.state.movieDataBase.map((i) => {
    //     i.filter = i.title.includes(q)
    //     return i;
    //   })
    //   this.setState({ movieDataBase: m })
    //   this.updateDB()
    // }
    // )
  }

  watchedToggle(e, movie) {
    let currentTitle = movie.title;
    let m = this.state.movieDataBase.map(i => {
      if (i.title === currentTitle) {
        i.watched = !i.watched;
      }
      return i;
    })
    this.setState({
      movieDataBase: m
    }, this.updateDB());
    ;
  }

  addMovie(e) {
    e.preventDefault();
    // way I  
    // var p =  new Promise((resolve, reject)=>{
    //   this.setState({
    //       movieDataBase: this.state.movieDataBase.concat([{title : this.state.addMovieStr}])
    //     });
    //   resolve();
    // }).then( ()=>{
    //     this.searchMovies(this.state.searchStr);
    //   }
    // )
    // way II 
    this.setState({
      movieDataBase: this.state.movieDataBase.concat([
        {
          title: this.state.addMovieStr,
          added: true,
          watched: false,
          show: true,
          filter: true,
        }])
    }, () => { this.searchMovies(this.state.searchStr); });
  }


  viewWatch(e) {
    switch (e.target.id) {
      case 'watched':
        this.setState({ showWatched: true, activateWatched: true }, () => { this.updateDB() })
        return;
      case 'new':
        this.setState({ showWatched: false, activateWatched: true }, () => { this.updateDB() })
        return;
      case 'reset':
        this.setState({ showWatched: false, activateWatched: false }, () => { this.updateDB() })
        return;


    }
    // if(e.target.id==='watched'){
    // } else if (e.target.id==='new'){
    //   this.setState({showWatched : false, activateWatched:true}, ()=> {this.updateDB()});
    // }
  }
  render() {
    return (
      <div className="movie-list">
        <div>
          <button className='watchToggleButton' id='watched' onClick={this.viewWatch}>
            rewatch!
          </button>
          <button className='watchToggleButton' id='new' onClick={this.viewWatch}>
            new!
          </button>
          <button className='watchToggleButton' id='reset' onClick={this.viewWatch}>
            reset toggle
          </button>
        </div>
        <div>
          <Movies currentDB={this.state.currentDB} watchedToggle={this.watchedToggle} />
        </div>
        <Search typeSearch={this.typeSearch} searchMovies={this.searchMovies} />
        <Add typeMovie={this.typeMovie} addMovie={this.addMovie} />
      </div>
    )
  }
};

MovieList.propTypes = {
  movieDB: React.PropTypes.array.isRequired
};
export default MovieList;
window.MovieList = MovieList;