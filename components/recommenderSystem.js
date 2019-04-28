import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
    document.getElementById('list')
);
  

class MovieList extends React.Component {

    render() {
      return (
        <div className="movie-list">
          <h1>Shopping List for {this.user.name}</h1>
          <ul>
              <Movies/>
          </ul>
        </div>
      );
    }
  }
  
