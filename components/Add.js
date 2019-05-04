
function Add() {
    return (
    <div className = 'add'>
        <label for="name">Add a movie</label>
        <input type="text" id="name" name="name" requiredminlength="4" maxlength="8" size="10" />
        <input className = "submit" type="submit" value="Send Request" />
    </div>
    )
}

export default Add;