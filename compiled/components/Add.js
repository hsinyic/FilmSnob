
function Add({ addMovie, typeMovie }) {
    return React.createElement(
        "div",
        { className: "add" },
        React.createElement(
            "label",
            { "for": "name" },
            "Add a movie"
        ),
        React.createElement("input", { type: "text", id: "name", name: "name", requiredminlength: "4", maxlength: "8", size: "10", onChange: e => {
                typeMovie(e);
            } }),
        React.createElement("input", { className: "submit", type: "submit", value: "Send Request", onClick: addMovie })
    );
}

export default Add;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQWRkLmpzIl0sIm5hbWVzIjpbIkFkZCIsImFkZE1vdmllIiwidHlwZU1vdmllIiwiZSJdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVNBLEdBQVQsQ0FBYSxFQUFDQyxRQUFELEVBQVVDLFNBQVYsRUFBYixFQUFtQztBQUMvQixXQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVksS0FBakI7QUFDSTtBQUFBO0FBQUEsY0FBTyxPQUFJLE1BQVg7QUFBQTtBQUFBLFNBREo7QUFFSSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QixFQUE2QixNQUFLLE1BQWxDLEVBQXlDLG1CQUFrQixHQUEzRCxFQUErRCxXQUFVLEdBQXpFLEVBQTZFLE1BQUssSUFBbEYsRUFBdUYsVUFBWUMsS0FBSTtBQUFDRCwwQkFBVUMsQ0FBVjtBQUFhLGFBQXJILEdBRko7QUFHSSx1Q0FBTyxXQUFZLFFBQW5CLEVBQTRCLE1BQUssUUFBakMsRUFBMEMsT0FBTSxjQUFoRCxFQUErRCxTQUFXRixRQUExRTtBQUhKLEtBREE7QUFPSDs7QUFFRCxlQUFlRCxHQUFmIiwiZmlsZSI6IkFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gQWRkKHthZGRNb3ZpZSx0eXBlTW92aWV9KSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZSA9ICdhZGQnPlxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPkFkZCBhIG1vdmllPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZG1pbmxlbmd0aD1cIjRcIiBtYXhsZW5ndGg9XCI4XCIgc2l6ZT1cIjEwXCIgb25DaGFuZ2UgPSB7ZT0+IHt0eXBlTW92aWUoZSl9fS8+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWUgPSBcInN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmQgUmVxdWVzdFwiIG9uQ2xpY2sgPSB7YWRkTW92aWV9IC8+XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGQ7Il19