import Movies from './Movies.js';
import Search from './Search.js';
import Add from './Add.js';

class MovieList extends React.Component {
    constructor(props) {
      super(props);
      var initialData = this.props.exampleMovieList.map(i=> {
        i.show = true;
        i.watched = false;
        i.searched = true;
        // i.show = i.watched*i.searched; 
        return i;
      })
      this.state = {  
        movieDataBase : this.props.exampleMovieList,
        filteredMovies : this.props.exampleMovieList,
        searchStr : "",
        addMovieStr: "",
        watchedList:[],
      }
      this.updateSearchStr = this.updateSearchStr.bind(this);
      this.updatefilteredMovies = this.updatefilteredMovies.bind(this);
      this.searchMovies = this.searchMovies.bind(this);
      this.addMovie = this.addMovie.bind(this);
      this.typeMovie = this.typeMovie.bind(this);
    }

    updateSearchStr(e){
      e.preventDefault();   
      this.setState({
        searchStr: e.target.value,
      })
    }

    updatefilteredMovies(newList){
      this.setState({
        filteredMovies: newList,
      })
    }

    searchMovies(q){
      return new Promise((resolve, reject)=>{
        var q = this.state.searchStr;
        resolve(q);
      }).then( (q)=>{
        this.updatefilteredMovies(this.state.movieDataBase.filter(i=> i.title.includes(q)));
        }
      )
    }

    updateWatchedList(movie){
      this.setState({
        watchedList:  this.state.watchedList.concat({title:movie})
      })
    }

    addMovie(e){
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
          movieDataBase: this.state.movieDataBase.concat([{title : this.state.addMovieStr}])
        }, ()=> {this.searchMovies(this.state.searchStr);});
    }

    typeMovie(e){
      e.preventDefault();   
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
        searchMovies={this.searchMovies} updateWatchedList= {this.updateWatchedList}/>
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