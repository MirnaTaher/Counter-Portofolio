import { useState } from "react";

const TodoForm = ({ addTodo }) => {


  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="my-5 border rounded shadow py-5">
      <h3 className="text-muted mb-4">Add a TODO</h3>

      <form onSubmit={handleSubmission}>
        Title <br />
        <input
        className="border rounded px-3 py-1"
          type="text"
          name="title"
          placeholder="Todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        Content <br />
        <textarea
         className="border rounded px-3 py-1 w-50"
         placeholder="Todo Content"
         width="100"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button className="my-4 btn btn-primary btn-sm px-4" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
