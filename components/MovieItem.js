function MovieItem({key, itemContent}) {
	return (
    <div className = 'movie-list-entry'>
        <h3>{itemContent.title}</h3>
    </div>
    )
    // return <h3> key, itemContent</h3>
}
// toggle on and off 
export default MovieItem;

