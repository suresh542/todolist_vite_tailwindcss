import React, { useEffect, useRef, useState } from "react";
import TodoTask from "./TodoTask";

export default function TodoListPra() {
  const [addTask, setAddTask] = useState(localStorage.getItem("todolist")?JSON.parse(localStorage.getItem("todolist")):[]);
  const inputRef = useRef(null);

  useEffect(()=>{
    localStorage.setItem("todolist", JSON.stringify(addTask))
  },[addTask])


  const handelSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value.trim();
    if (inputValue == "") {
      return null;
    }

    const todotask = {
      id: Date.now(),
      task: inputValue,
      isCompeleted: false,
    };
    setAddTask((perv) => [...perv, todotask]);
    inputRef.current.value = "";
  };

  // update the task

  const completedTask = (id) => {
     setAddTask((perv) => {
      return perv.map((todo) => {
        if (id === todo.id) {
          return { ...todo, isCompeleted: !todo.isCompeleted };
        }
        return todo;
      });
    });
  };

  // deleted task
    const DeleteTask = (id) => {
      setAddTask((perv) => {
        return perv.filter((todo) => todo.id !== id);
      });
    };
  

  return (
    <div>
      <div className="max-w-[50vw] mx-auto py-10 pt-20 text-center h-screen">
        <div className="text-white text-3xl font-semibold">TodoList</div>
        <div className="mx-20">
          <form className="flex justify-center h-26" onSubmit={handelSubmit}>
            <input
              ref={inputRef}
              type="text"
              name=""
              id=""
              className="w-full sm-w-34 md-w-54  p-5 my-5 border-2 border-gray-400 rounded-lg focus:outline-none text-white font-semibold"
              placeholder="Enter the Task"
            />
            <input
              type="submit"
              name=""
              id=""
              className="mx-5 bg-white p-5 my-5 rounded-lg "
            />
          </form>
          <div className="text-start text-red-500 hidden font-semibold shadow-blue-100">
            Fill the Task here
          </div>
        </div>

        {addTask.length > 0 ? (
          <div className="bg-white mx-20 my-5 rounded-lg p-5  max-w-full">
            <div className="text-amber-300 font-semibold text-lg">
              list of the Details
            </div>
            {addTask.map((item, index) => {
              return (
                <TodoTask
                  taskTitle={item.task}
                  id={item.id}
                  iscompleted={item.isCompeleted}
                  key={index}
                  completedTask={completedTask}
                  deleteTask = {DeleteTask}
                />
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
