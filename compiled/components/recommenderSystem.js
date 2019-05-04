import Movies from '../components/Movie.js';

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
        React.createElement(Movies, null)
      )
    );
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcmVjb21tZW5kZXJTeXN0ZW0uanMiXSwibmFtZXMiOlsiTW92aWVzIiwiTW92aWVMaXN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxNQUFQLE1BQW1CLHdCQUFuQjs7QUFFQSxNQUFNQyxTQUFOLFNBQXdCQyxNQUFNQyxTQUE5QixDQUF3QztBQUNwQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0Q7QUFDREMsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0ksNEJBQUMsTUFBRDtBQURKO0FBRkYsS0FERjtBQVFEO0FBYm1DIiwiZmlsZSI6InJlY29tbWVuZGVyU3lzdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllcyBmcm9tICcuLi9jb21wb25lbnRzL01vdmllLmpzJ1xuXG5jbGFzcyBNb3ZpZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPlxuICAgICAgICAgIDxoMT5Nb3ZpZSBMaXN0IGZvciBiaWcgbWVvdzwvaDE+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8TW92aWVzIC8+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICBcbiJdfQ==