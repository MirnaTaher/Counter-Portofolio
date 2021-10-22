import TodoForm from "../../Components/todo/TodoForm";
import TodoList from "../../Components/todo/TodoList";
import './Todo.css';
import {useSelector} from 'react-redux'
import {addTodoAction} from '../../redux/TodoRedux';
import {delTodoAction} from '../../redux/TodoRedux';
import { useDispatch } from "react-redux";

function Todo() {

  const todoState = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const addTodo = (task) => {
    dispatch(addTodoAction(task))
  };

  const deleteTodo = (index) => {
    dispatch(delTodoAction(index))
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todoState} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
