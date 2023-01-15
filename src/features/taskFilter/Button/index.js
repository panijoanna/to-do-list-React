
const Button = () => {
    const dispatch = useDispatch();
    return (
      <ListsButton onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </ListsButton>
    );
  };