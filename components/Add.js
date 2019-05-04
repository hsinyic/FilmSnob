
function Add({addMovie,typeMovie}) {
    return (
    <div className = 'add'>
        <label for="name">Add a movie</label>
        <input type="text" id="name" name="name" requiredminlength="4" maxlength="8" size="10" onChange = {e=> {typeMovie(e)}}/>
        <input className = "submit" type="submit" value="Send Request" onClick = {addMovie} />
    </div>
    )
}

export default Add;