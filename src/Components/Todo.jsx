import React from "react";
import {useState} from "react";
import TodoList from "./Todo-list";
import TodoCreate from "./Todo-create";

const Todo = () => {
  const [getTodos , setTodos] = useState([
    { id: 1, title: "Learn react" },
    { id: 2, title: "Learn PHP" },
    { id: 3, title: "Learn Java" },
  ]);

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo))
  };

  return (
    <div className=" flex justify-center">
      <div className="w-full max-w-4xl ">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-52">
          <TodoCreate onCreateTodo={eventCreateTodo} />
          <h3 className="flex justify-center"> TodoList </h3>
          <TodoList dataTodos={getTodos} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
