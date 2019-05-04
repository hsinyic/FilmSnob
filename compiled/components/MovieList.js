import Movies from './Movies.js';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      "div",
      { className: "movie-list" },
      React.createElement(
        "h1",
        null,
        "Movie List for big meow"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(Movies, { exampleMovieList: this.props.exampleMovieList })
      )
    );
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvTW92aWVMaXN0LmpzIl0sIm5hbWVzIjpbIk1vdmllcyIsIk1vdmllTGlzdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImV4YW1wbGVNb3ZpZUxpc3QiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLE1BQVAsTUFBbUIsYUFBbkI7O0FBRUEsTUFBTUMsU0FBTixTQUF3QkMsTUFBTUMsU0FBOUIsQ0FBd0M7QUFDcENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNEO0FBQ0RDLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUE7QUFBQTtBQUNJLDRCQUFDLE1BQUQsSUFBUSxrQkFBb0IsS0FBS0QsS0FBTCxDQUFXRSxnQkFBdkM7QUFESjtBQUZGLEtBREY7QUFRRDtBQWJtQyIsImZpbGUiOiJNb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWVzIGZyb20gJy4vTW92aWVzLmpzJ1xuXG5jbGFzcyBNb3ZpZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPlxuICAgICAgICAgIDxoMT5Nb3ZpZSBMaXN0IGZvciBiaWcgbWVvdzwvaDE+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8TW92aWVzIGV4YW1wbGVNb3ZpZUxpc3QgPSB7dGhpcy5wcm9wcy5leGFtcGxlTW92aWVMaXN0fS8+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICBcbiJdfQ==