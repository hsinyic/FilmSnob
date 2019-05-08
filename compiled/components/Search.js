
function Search({ updateSearchStr, updatefilteredMovies, searchMovies }) {
    // the above is ES^ short hand. It says instead of props (bunch of key value pairs), let's have {updateSearchStr:updateSearchStr, updatefilteredMovies:updatefilteredMovies}
    return React.createElement(
        "div",
        { className: "search" },
        React.createElement(
            "label",
            null,
            "Search the site:"
        ),
        React.createElement("input", { type: "search", id: "site-search", name: "q",
            "aria-label": "Search through site content", onChange: e => {
                updateSearchStr(e);
            } }),
        React.createElement(
            "button",
            { onClick: searchMovies },
            "Search"
        )
    );
}

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVwZGF0ZVNlYXJjaFN0ciIsInVwZGF0ZWZpbHRlcmVkTW92aWVzIiwic2VhcmNoTW92aWVzIiwiZSJdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVNBLE1BQVQsQ0FBZ0IsRUFBQ0MsZUFBRCxFQUFrQkMsb0JBQWxCLEVBQXVDQyxZQUF2QyxFQUFoQixFQUFzRTtBQUNsRTtBQUNBLFdBQ0E7QUFBQTtBQUFBLFVBQUssV0FBWSxRQUFqQjtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEQTtBQUVBLHVDQUFPLE1BQUssUUFBWixFQUFxQixJQUFHLGFBQXhCLEVBQXNDLE1BQUssR0FBM0M7QUFDUSwwQkFBVyw2QkFEbkIsRUFDaUQsVUFBYUMsS0FBSTtBQUFFSCxnQ0FBZ0JHLENBQWhCO0FBQXFCLGFBRHpGLEdBRkE7QUFLQTtBQUFBO0FBQUEsY0FBUSxTQUFXRCxZQUFuQjtBQUFBO0FBQUE7QUFMQSxLQURBO0FBU0g7O0FBRUQsZUFBZUgsTUFBZiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIFNlYXJjaCh7dXBkYXRlU2VhcmNoU3RyLCB1cGRhdGVmaWx0ZXJlZE1vdmllcyxzZWFyY2hNb3ZpZXN9KSB7XG4gICAgLy8gdGhlIGFib3ZlIGlzIEVTXiBzaG9ydCBoYW5kLiBJdCBzYXlzIGluc3RlYWQgb2YgcHJvcHMgKGJ1bmNoIG9mIGtleSB2YWx1ZSBwYWlycyksIGxldCdzIGhhdmUge3VwZGF0ZVNlYXJjaFN0cjp1cGRhdGVTZWFyY2hTdHIsIHVwZGF0ZWZpbHRlcmVkTW92aWVzOnVwZGF0ZWZpbHRlcmVkTW92aWVzfVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWUgPSAnc2VhcmNoJz5cbiAgICA8bGFiZWw+U2VhcmNoIHRoZSBzaXRlOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBpZD1cInNpdGUtc2VhcmNoXCIgbmFtZT1cInFcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaCB0aHJvdWdoIHNpdGUgY29udGVudFwiIG9uQ2hhbmdlID0gIHtlPT4geyB1cGRhdGVTZWFyY2hTdHIoZSk7IH19IC8+IFxuICAgICAgICAgICAgICAgICAgIHsvKiBVc2UgYXN5bmNocm9ub3VzIGNvZGUgdG8gaW1wbGVtZW50IHVwZGF0ZVNlYXJjaFN0ciBhbmQgc2VhcmNoTW92aWVzICovfVxuICAgIDxidXR0b24gb25DbGljayA9IHtzZWFyY2hNb3ZpZXN9ID5TZWFyY2g8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiXX0=