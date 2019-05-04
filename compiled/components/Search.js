
function Search({ updateSearchStr, updatefilteredMovies, searchMovies }) {
    // the above is ES^ short hand. It says instead of props (bunch of key value pairs), let's have {updateSearchStr:updateSearchStr, updatefilteredMovies:updatefilteredMovies}
    return React.createElement(
        "div",
        { className: "search" },
        React.createElement(
            "label",
            { "for": "site-search" },
            "Search the site:"
        ),
        React.createElement("input", { type: "search", id: "site-search", name: "q",
            "aria-label": "Search through site content", onChange: e => {
                updateSearchStr(e);searchMovies(e.target.value);
            } }),
        React.createElement(
            "button",
            null,
            "Search"
        )
    );
}

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVwZGF0ZVNlYXJjaFN0ciIsInVwZGF0ZWZpbHRlcmVkTW92aWVzIiwic2VhcmNoTW92aWVzIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBU0EsTUFBVCxDQUFnQixFQUFDQyxlQUFELEVBQWtCQyxvQkFBbEIsRUFBdUNDLFlBQXZDLEVBQWhCLEVBQXNFO0FBQ2xFO0FBQ0EsV0FDQTtBQUFBO0FBQUEsVUFBSyxXQUFZLFFBQWpCO0FBQ0E7QUFBQTtBQUFBLGNBQU8sT0FBSSxhQUFYO0FBQUE7QUFBQSxTQURBO0FBRUEsdUNBQU8sTUFBSyxRQUFaLEVBQXFCLElBQUcsYUFBeEIsRUFBc0MsTUFBSyxHQUEzQztBQUNRLDBCQUFXLDZCQURuQixFQUNpRCxVQUFhQyxLQUFJO0FBQUVILGdDQUFnQkcsQ0FBaEIsRUFBb0JELGFBQWFDLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFBK0IsYUFEdkgsR0FGQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQSxLQURBO0FBU0g7O0FBRUQsZUFBZU4sTUFBZiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIFNlYXJjaCh7dXBkYXRlU2VhcmNoU3RyLCB1cGRhdGVmaWx0ZXJlZE1vdmllcyxzZWFyY2hNb3ZpZXN9KSB7XG4gICAgLy8gdGhlIGFib3ZlIGlzIEVTXiBzaG9ydCBoYW5kLiBJdCBzYXlzIGluc3RlYWQgb2YgcHJvcHMgKGJ1bmNoIG9mIGtleSB2YWx1ZSBwYWlycyksIGxldCdzIGhhdmUge3VwZGF0ZVNlYXJjaFN0cjp1cGRhdGVTZWFyY2hTdHIsIHVwZGF0ZWZpbHRlcmVkTW92aWVzOnVwZGF0ZWZpbHRlcmVkTW92aWVzfVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWUgPSAnc2VhcmNoJz5cbiAgICA8bGFiZWwgZm9yPVwic2l0ZS1zZWFyY2hcIj5TZWFyY2ggdGhlIHNpdGU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIGlkPVwic2l0ZS1zZWFyY2hcIiBuYW1lPVwicVwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoIHRocm91Z2ggc2l0ZSBjb250ZW50XCIgb25DaGFuZ2UgPSAge2U9PiB7IHVwZGF0ZVNlYXJjaFN0cihlKTsgc2VhcmNoTW92aWVzKGUudGFyZ2V0LnZhbHVlKTsgfX0gLz4gXG4gICAgICAgICAgICAgICAgICAgey8qIFVzZSBhc3luY2hyb25vdXMgY29kZSB0byBpbXBsZW1lbnQgdXBkYXRlU2VhcmNoU3RyIGFuZCBzZWFyY2hNb3ZpZXMgKi99XG4gICAgPGJ1dHRvbj5TZWFyY2g8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiXX0=