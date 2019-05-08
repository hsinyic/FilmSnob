// function MovieItem({key, itemContent, toggleMovie}) {
// 	return (
// 	// select className as well as key 
//     <div className = 'movie-list-entry'>
//         <h3>{itemContent.title} 
// 			<button className="watchToggleButton" type="button" onClick={()=>{console.log('hi');}}>
// 				watch me! 
// 			</button>
//     	</h3>
//     </div>
//     )
//     // return <h3> key, itemContent</h3>
// }
// // toggle on and off 
// export default MovieItem;

class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watched: 'to watch <3'
        };
        this.toggleMovie = this.toggleMovie.bind(this);
    }
    toggleMovie(e) {
        event.preventDefault();
        $(e.target).toggleClass('alreadyWatched');
        let movie_name = $(e.target).parent().find("span").text();
        let i = this.state.watched === 'to watch <3' ? "watched!" : "to watch <3";
        this.setState({ watched: i });
        // this.props.updateWatchedList(movie_name);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'movie-list-entry' },
            React.createElement(
                'h3',
                null,
                this.props.itemContent.title,
                React.createElement(
                    'button',
                    { className: 'watchToggleButton', type: 'button', onClick: e => {
                            this.toggleMovie(e, this.props.itemContent);
                        } },
                    this.state.watched
                )
            )
        );
    }
}
export default MovieItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvTW92aWVJdGVtLmpzIl0sIm5hbWVzIjpbIk1vdmllSXRlbSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwid2F0Y2hlZCIsInRvZ2dsZU1vdmllIiwiYmluZCIsImUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJCIsInRhcmdldCIsInRvZ2dsZUNsYXNzIiwibW92aWVfbmFtZSIsInBhcmVudCIsImZpbmQiLCJ0ZXh0IiwiaSIsInNldFN0YXRlIiwicmVuZGVyIiwiaXRlbUNvbnRlbnQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFNBQU4sU0FBd0JDLE1BQU1DLFNBQTlCLENBQXdDO0FBQ3BDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNqQixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHFCQUFRO0FBREcsU0FBYjtBQUdBLGFBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDRDtBQUNERCxnQkFBWUUsQ0FBWixFQUFjO0FBQ1ZDLGNBQU1DLGNBQU47QUFDRkMsVUFBRUgsRUFBRUksTUFBSixFQUFZQyxXQUFaLENBQXdCLGdCQUF4QjtBQUNBLFlBQUlDLGFBQWFILEVBQUVILEVBQUVJLE1BQUosRUFBWUcsTUFBWixHQUFxQkMsSUFBckIsQ0FBMEIsTUFBMUIsRUFBa0NDLElBQWxDLEVBQWpCO0FBQ0EsWUFBSUMsSUFBSSxLQUFLZCxLQUFMLENBQVdDLE9BQVgsS0FBdUIsYUFBeEIsR0FBeUMsVUFBekMsR0FBc0QsYUFBN0Q7QUFDQSxhQUFLYyxRQUFMLENBQWMsRUFBQ2QsU0FBUWEsQ0FBVCxFQUFkO0FBQ0E7QUFDRDs7QUFFREUsYUFBUztBQUNMLGVBQ0E7QUFBQTtBQUFBLGNBQUssV0FBWSxrQkFBakI7QUFDSTtBQUFBO0FBQUE7QUFDQyxxQkFBS2pCLEtBQUwsQ0FBV2tCLFdBQVgsQ0FBdUJDLEtBRHhCO0FBRUk7QUFBQTtBQUFBLHNCQUFRLFdBQVUsbUJBQWxCLEVBQXNDLE1BQUssUUFBM0MsRUFBb0QsU0FBVWQsQ0FBRCxJQUFLO0FBQUMsaUNBQUtGLFdBQUwsQ0FBaUJFLENBQWpCLEVBQW9CLEtBQUtMLEtBQUwsQ0FBV2tCLFdBQS9CO0FBQTRDLHlCQUEvRztBQUNLLHlCQUFLakIsS0FBTCxDQUFXQztBQURoQjtBQUZKO0FBREosU0FEQTtBQVVIO0FBNUJtQztBQThCeEMsZUFBZU4sU0FBZiIsImZpbGUiOiJNb3ZpZUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmdW5jdGlvbiBNb3ZpZUl0ZW0oe2tleSwgaXRlbUNvbnRlbnQsIHRvZ2dsZU1vdmllfSkge1xuLy8gXHRyZXR1cm4gKFxuLy8gXHQvLyBzZWxlY3QgY2xhc3NOYW1lIGFzIHdlbGwgYXMga2V5IFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lID0gJ21vdmllLWxpc3QtZW50cnknPlxuLy8gICAgICAgICA8aDM+e2l0ZW1Db250ZW50LnRpdGxlfSBcbi8vIFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwid2F0Y2hUb2dnbGVCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCk9Pntjb25zb2xlLmxvZygnaGknKTt9fT5cbi8vIFx0XHRcdFx0d2F0Y2ggbWUhIFxuLy8gXHRcdFx0PC9idXR0b24+XG4vLyAgICAgXHQ8L2gzPlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIClcbi8vICAgICAvLyByZXR1cm4gPGgzPiBrZXksIGl0ZW1Db250ZW50PC9oMz5cbi8vIH1cbi8vIC8vIHRvZ2dsZSBvbiBhbmQgb2ZmIFxuLy8gZXhwb3J0IGRlZmF1bHQgTW92aWVJdGVtO1xuXG5jbGFzcyBNb3ZpZUl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0geyAgXG4gICAgICAgIHdhdGNoZWQ6J3RvIHdhdGNoIDwzJ1xuICAgICAgfVxuICAgICAgdGhpcy50b2dnbGVNb3ZpZSA9IHRoaXMudG9nZ2xlTW92aWUuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgdG9nZ2xlTW92aWUoZSl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKGUudGFyZ2V0KS50b2dnbGVDbGFzcygnYWxyZWFkeVdhdGNoZWQnKTtcbiAgICAgIGxldCBtb3ZpZV9uYW1lID0gJChlLnRhcmdldCkucGFyZW50KCkuZmluZChcInNwYW5cIikudGV4dCgpO1xuICAgICAgbGV0IGk9ICh0aGlzLnN0YXRlLndhdGNoZWQgPT09ICd0byB3YXRjaCA8MycpPyAgXCJ3YXRjaGVkIVwiIDogXCJ0byB3YXRjaCA8M1wiO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7d2F0Y2hlZDppfSk7XG4gICAgICAvLyB0aGlzLnByb3BzLnVwZGF0ZVdhdGNoZWRMaXN0KG1vdmllX25hbWUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnbW92aWUtbGlzdC1lbnRyeSc+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5pdGVtQ29udGVudC50aXRsZX0gXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YXRjaFRvZ2dsZUJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSk9Pnt0aGlzLnRvZ2dsZU1vdmllKGUsIHRoaXMucHJvcHMuaXRlbUNvbnRlbnQpfX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLndhdGNoZWR9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1vdmllSXRlbTtcblxuXG5cblxuXG4iXX0=