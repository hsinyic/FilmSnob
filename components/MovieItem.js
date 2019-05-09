function MovieItem({key, itemContent, watchedToggle}) {
    if (itemContent.watched){
        return (
            <div className = 'movie-list-entry'>
                <h3>{itemContent.title} 
                    <button className="alreadyWatched" type="button" onClick={(e)=> {watchedToggle(e, itemContent);}} >
                        watched
                    </button>
                </h3>
            </div>
            )
    } else {
        return (
            <div className = 'movie-list-entry'>
                <h3>{itemContent.title} 
                    <button className="watchToggleButton" type="button" onClick={(e)=> {watchedToggle(e, itemContent);}} >
                        watch me!
                    </button>
                </h3>
            </div>
            )      
    }

}
export default MovieItem;


