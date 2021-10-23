const TodoList = ({ todos, deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="border rounded w-75 mx-auto p-3">
              <div className="text">
                <div className="row justify-content-between align-items-center">
                  <div className="col-7">
                    <p>Title : {todo.title}</p>
                    <p>Content : {todo.content}</p>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTodo(i)}
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
