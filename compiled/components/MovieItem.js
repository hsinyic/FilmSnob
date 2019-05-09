function MovieItem({ key, itemContent, watchedToggle }) {
    if (itemContent.watched) {
        return React.createElement(
            "div",
            { className: "movie-list-entry" },
            React.createElement(
                "h3",
                null,
                itemContent.title,
                React.createElement(
                    "button",
                    { className: "alreadyWatched", type: "button", onClick: e => {
                            watchedToggle(e, itemContent);
                        } },
                    "watched"
                )
            )
        );
    } else {
        return React.createElement(
            "div",
            { className: "movie-list-entry" },
            React.createElement(
                "h3",
                null,
                itemContent.title,
                React.createElement(
                    "button",
                    { className: "watchToggleButton", type: "button", onClick: e => {
                            watchedToggle(e, itemContent);
                        } },
                    "watch me!"
                )
            )
        );
    }
}
export default MovieItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvTW92aWVJdGVtLmpzIl0sIm5hbWVzIjpbIk1vdmllSXRlbSIsImtleSIsIml0ZW1Db250ZW50Iiwid2F0Y2hlZFRvZ2dsZSIsIndhdGNoZWQiLCJ0aXRsZSIsImUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVQsQ0FBbUIsRUFBQ0MsR0FBRCxFQUFNQyxXQUFOLEVBQW1CQyxhQUFuQixFQUFuQixFQUFzRDtBQUNsRCxRQUFJRCxZQUFZRSxPQUFoQixFQUF3QjtBQUNwQixlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVksa0JBQWpCO0FBQ0k7QUFBQTtBQUFBO0FBQUtGLDRCQUFZRyxLQUFqQjtBQUNJO0FBQUE7QUFBQSxzQkFBUSxXQUFVLGdCQUFsQixFQUFtQyxNQUFLLFFBQXhDLEVBQWlELFNBQVVDLENBQUQsSUFBTTtBQUFDSCwwQ0FBY0csQ0FBZCxFQUFpQkosV0FBakI7QUFBK0IseUJBQWhHO0FBQUE7QUFBQTtBQURKO0FBREosU0FESjtBQVNILEtBVkQsTUFVTztBQUNILGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBWSxrQkFBakI7QUFDSTtBQUFBO0FBQUE7QUFBS0EsNEJBQVlHLEtBQWpCO0FBQ0k7QUFBQTtBQUFBLHNCQUFRLFdBQVUsbUJBQWxCLEVBQXNDLE1BQUssUUFBM0MsRUFBb0QsU0FBVUMsQ0FBRCxJQUFNO0FBQUNILDBDQUFjRyxDQUFkLEVBQWlCSixXQUFqQjtBQUErQix5QkFBbkc7QUFBQTtBQUFBO0FBREo7QUFESixTQURKO0FBU0g7QUFFSjtBQUNELGVBQWVGLFNBQWYiLCJmaWxlIjoiTW92aWVJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTW92aWVJdGVtKHtrZXksIGl0ZW1Db250ZW50LCB3YXRjaGVkVG9nZ2xlfSkge1xuICAgIGlmIChpdGVtQ29udGVudC53YXRjaGVkKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ21vdmllLWxpc3QtZW50cnknPlxuICAgICAgICAgICAgICAgIDxoMz57aXRlbUNvbnRlbnQudGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFscmVhZHlXYXRjaGVkXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKT0+IHt3YXRjaGVkVG9nZ2xlKGUsIGl0ZW1Db250ZW50KTt9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXRjaGVkXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnbW92aWUtbGlzdC1lbnRyeSc+XG4gICAgICAgICAgICAgICAgPGgzPntpdGVtQ29udGVudC50aXRsZX0gXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2F0Y2hUb2dnbGVCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpPT4ge3dhdGNoZWRUb2dnbGUoZSwgaXRlbUNvbnRlbnQpO319ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoIG1lIVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApICAgICAgXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBNb3ZpZUl0ZW07XG5cblxuIl19