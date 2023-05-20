import React from "react";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.dataTodos.map((todo) => (
          <li
            className="flex justify-between m-2 p-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            key={todo.id}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
