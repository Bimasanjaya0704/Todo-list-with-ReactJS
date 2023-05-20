import React, { useState } from "react";

const TodoCreate = (props) => {
  const [getInputTodo, setInputTodo] = useState(' ')


  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: getInputTodo,
    };
    props.onCreateTodo(newTodo);

    setInputTodo(' ')
  }

const handleInputTodo = (event) => {
    setInputTodo(event.target.value)
}

  return (
    <>
      <div className="mb-4 flex justify-between">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={getInputTodo}
          placeholder="Masukan List"
          onChange={handleInputTodo}
        />
        <button
          className="ml-2 bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default TodoCreate;
