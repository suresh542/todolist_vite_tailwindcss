import React, { useRef, useState } from "react";
import AnalogClock from "analog-clock-react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
import TodoTaskList from "./TodoTaskList";

export default function TodoList() {
  const [addTask, setAddTask] = useState([]);
  console.log(addTask);

  const inputRef = useRef(null);

  const AddBtn = () => {
    const inputValue = inputRef.current.value.trim();
    if (inputValue == "") {
      return null;
    }
    const todoValue = {
      id: Date.now(),
      task: inputValue,
      isCompleted: false,
    };

    setAddTask((prev) => [...prev, todoValue]);
    inputRef.current.value = "";
  };

  // taskComplete
  const taskComplete = (id) => {
    setAddTask((prev) => {
      return prev.map((todo) => {
        if (id === todo.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  //task delete

  const DeleteTask = (id) => {
    setAddTask((perv) => {
      return perv.filter((todo) => todo.id !== id);
    });
  };

  let ClockOptions = {
    width: "200px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#17a2b8",
    centerColor: "#459cff",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#d81c7a",
      minute: "#ffffff",
      hour: "#ffffff",
    },
  };
  return (
    <div className=" max-w-[85vw] mx-auto h-screen flex justify-center ">
      <div className="flex rounded-2xl">
        <div className="topOfToDo flex justify-center center" >
          <div className="clock  ">
            {/* <AnalogClock {...ClockOptions} /> */}
          </div>
          <div className="date">
            <div className="dateAndDay"></div>
            <div className="Weather"></div>
          </div>
        </div>
        <div>
          <div>
            <div className="py-20 text-center font-bold text-white text-3xl">
              ToDo List
            </div>
            <div className="flex ">
              <input
                ref={inputRef}
                type="text"
                className=" rounded-lg border border-gray-300 w-full h-10  hover:not-focus focus:outline-none px-5"
              />
              <button
                type="submit"
                className="mx-5 px-5 py-2 rounded-lg bg-white bg-none hover:text-gray-900 hover:bg-gray-200"
                onClick={AddBtn}
              >
                Add
              </button>
            </div>

            <div className="my-3 text-sm font-bold text-red-600 px-1 absolute">
              fill Task Details
            </div>
          </div>
          <div className="w-[30-rem] bg-white py-6 px-5 mt-10">
            <fieldset>
              <legend className="text-lg font-semiblod text-amber-400">
                List of the task
              </legend>
              {addTask.length == 0 ? (
                <p>there are no task enter</p>
              ) : (
                addTask.map((item, index) => {
                  return (
                    <TodoTaskList
                      taskTitle={item.task}
                      taskId={item.id}
                      key={index}
                      isComplete={item.isCompleted}
                      taskComplete={taskComplete}
                      deleteBtn={DeleteTask}
                    />
                  );
                })
              )}
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
