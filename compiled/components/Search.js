
function Search({ typeSearch, searchMovies }) {
    // the above is ES^ short hand. It says instead of props (bunch of key value pairs), let's have {typeSearch:typeSearch, updatefilteredMovies:updatefilteredMovies}
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
                typeSearch(e);
            } }),
        React.createElement(
            "button",
            { onClick: searchMovies },
            "Search"
        )
    );
}

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInR5cGVTZWFyY2giLCJzZWFyY2hNb3ZpZXMiLCJlIl0sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBU0EsTUFBVCxDQUFnQixFQUFDQyxVQUFELEVBQVlDLFlBQVosRUFBaEIsRUFBMkM7QUFDdkM7QUFDQSxXQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVksUUFBakI7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREE7QUFFQSx1Q0FBTyxNQUFLLFFBQVosRUFBcUIsSUFBRyxhQUF4QixFQUFzQyxNQUFLLEdBQTNDO0FBQ1EsMEJBQVcsNkJBRG5CLEVBQ2lELFVBQWFDLEtBQUk7QUFBRUYsMkJBQVdFLENBQVg7QUFBZ0IsYUFEcEYsR0FGQTtBQUtBO0FBQUE7QUFBQSxjQUFRLFNBQVdELFlBQW5CO0FBQUE7QUFBQTtBQUxBLEtBREE7QUFTSDs7QUFFRCxlQUFlRixNQUFmIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gU2VhcmNoKHt0eXBlU2VhcmNoLHNlYXJjaE1vdmllc30pIHtcbiAgICAvLyB0aGUgYWJvdmUgaXMgRVNeIHNob3J0IGhhbmQuIEl0IHNheXMgaW5zdGVhZCBvZiBwcm9wcyAoYnVuY2ggb2Yga2V5IHZhbHVlIHBhaXJzKSwgbGV0J3MgaGF2ZSB7dHlwZVNlYXJjaDp0eXBlU2VhcmNoLCB1cGRhdGVmaWx0ZXJlZE1vdmllczp1cGRhdGVmaWx0ZXJlZE1vdmllc31cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lID0gJ3NlYXJjaCc+XG4gICAgPGxhYmVsPlNlYXJjaCB0aGUgc2l0ZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgaWQ9XCJzaXRlLXNlYXJjaFwiIG5hbWU9XCJxXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2ggdGhyb3VnaCBzaXRlIGNvbnRlbnRcIiBvbkNoYW5nZSA9ICB7ZT0+IHsgdHlwZVNlYXJjaChlKTsgfX0gLz4gXG4gICAgICAgICAgICAgICAgICAgey8qIFVzZSBhc3luY2hyb25vdXMgY29kZSB0byBpbXBsZW1lbnQgdHlwZVNlYXJjaCBhbmQgc2VhcmNoTW92aWVzICovfVxuICAgIDxidXR0b24gb25DbGljayA9IHtzZWFyY2hNb3ZpZXN9ID5TZWFyY2g8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiXX0=