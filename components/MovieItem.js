function MovieItem({key, itemContent}) {
	return <h3>{itemContent.title}</h3>
    // return <h3> key, itemContent</h3>
}
// toggle on and off 
export default MovieItem;


function MovieItem(props) {
	return <h3>{props.itemContent.title}</h3>
    // return <h3> key, itemContent</h3>
}
// toggle on and off 
export default MovieItem;
