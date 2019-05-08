
function Add({addMovie,typeMovie}) {
    return (
    <div className = 'add'>
        <label>Add a movie</label>
        <input type="text" id="name" name="name" requiredminlength="4"  size="10" onChange = {e=> {typeMovie(e)}}/>
        <input className = "submit" type="submit" value="Send Request" onClick = {addMovie} />
    </div>
    )
}

export default Add;