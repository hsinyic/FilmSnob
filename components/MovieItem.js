// function MovieItem({key, itemContent, toggleMovie}) {
// 	return (
// 	// select className as well as key 
//     <div className = 'movie-list-entry'>
//         <h3>{itemContent.title} 
// 			<button className="watchToggleButton" type="button" onClick={()=>{console.log('hi');}}>
// 				watch me! 
// 			</button>
//     	</h3>
//     </div>
//     )
//     // return <h3> key, itemContent</h3>
// }
// // toggle on and off 
// export default MovieItem;

class MovieItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  
        watched:'to watch <3'
      }
      this.toggleMovie = this.toggleMovie.bind(this);
    }
    toggleMovie(e){
        event.preventDefault();
      $(e.target).toggleClass('alreadyWatched');
      let movie_name = $(e.target).parent().find("span").text();
      let i= (this.state.watched === 'to watch <3')?  "watched!" : "to watch <3";
      this.setState({watched:i});
    }

    render() {
        return (
        <div className = 'movie-list-entry'>
            <h3>
            {this.props.itemContent.title} 
                <button className="watchToggleButton" type="button" onClick={(e)=>{this.toggleMovie(e, this.props.itemContent)}}>
                    {this.state.watched}
                </button>
            </h3>
        </div>
        )
    }
}
export default MovieItem;





