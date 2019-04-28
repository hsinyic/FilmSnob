function Movie({movies}) {
    const listItems = movies.map((m, idx) =>
    <ListItem key={idx.toString()}
              itemContent={m} />
              );

}

