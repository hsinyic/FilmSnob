import API_KEY from "./config/config.js"

function searchMovieDB(q) {
    var option = {
        method: 'GET'
    }
    console.log(q)
    var qstr = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query=' + q.split(' ').join('+');
    console.log(qstr);
    fetch(qstr, option)
        .then(function(response) {
            var res = response.json();
            return res;
        })
        .then(i => {
            // var res = JSON.stringify(i);
            return i.results;
        })
        .then(res => {
            console.log(res);
        })
        .catch(e => { throw e });
}


export default searchMovieDB;