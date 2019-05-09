
function Add({ addMovie, typeMovie }) {
    return React.createElement(
        "div",
        { className: "add" },
        React.createElement(
            "label",
            null,
            "Add a movie"
        ),
        React.createElement("input", { type: "text", id: "name", name: "name", requiredminlength: "4", size: "10", onChange: e => {
                typeMovie(e);
            } }),
        React.createElement("input", { className: "submit", type: "submit", value: "Send Request", onClick: addMovie })
    );
}

export default Add;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQWRkLmpzIl0sIm5hbWVzIjpbIkFkZCIsImFkZE1vdmllIiwidHlwZU1vdmllIiwiZSJdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVNBLEdBQVQsQ0FBYSxFQUFDQyxRQUFELEVBQVVDLFNBQVYsRUFBYixFQUFtQztBQUMvQixXQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVksS0FBakI7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREo7QUFFSSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QixFQUE2QixNQUFLLE1BQWxDLEVBQXlDLG1CQUFrQixHQUEzRCxFQUFnRSxNQUFLLElBQXJFLEVBQTBFLFVBQVlDLEtBQUk7QUFBQ0QsMEJBQVVDLENBQVY7QUFBYSxhQUF4RyxHQUZKO0FBR0ksdUNBQU8sV0FBWSxRQUFuQixFQUE0QixNQUFLLFFBQWpDLEVBQTBDLE9BQU0sY0FBaEQsRUFBK0QsU0FBV0YsUUFBMUU7QUFISixLQURBO0FBT0g7O0FBRUQsZUFBZUQsR0FBZiIsImZpbGUiOiJBZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIEFkZCh7YWRkTW92aWUsdHlwZU1vdmllfSkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWUgPSAnYWRkJz5cbiAgICAgICAgPGxhYmVsPkFkZCBhIG1vdmllPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZG1pbmxlbmd0aD1cIjRcIiAgc2l6ZT1cIjEwXCIgb25DaGFuZ2UgPSB7ZT0+IHt0eXBlTW92aWUoZSl9fS8+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWUgPSBcInN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmQgUmVxdWVzdFwiIG9uQ2xpY2sgPSB7YWRkTW92aWV9IC8+XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGQ7Il19