
function Search({updateSearchStr, updatefilteredMovies,searchMovies}) {
    // the above is ES^ short hand. It says instead of props (bunch of key value pairs), let's have {updateSearchStr:updateSearchStr, updatefilteredMovies:updatefilteredMovies}
    return (
    <div className = 'search'>
    <label>Search the site:</label>
    <input type="search" id="site-search" name="q"
            aria-label="Search through site content" onChange =  {e=> { updateSearchStr(e); }} /> 
                   {/* Use asynchronous code to implement updateSearchStr and searchMovies */}
    <button onClick = {searchMovies} >Search</button>
    </div>
    )
}

export default Search;