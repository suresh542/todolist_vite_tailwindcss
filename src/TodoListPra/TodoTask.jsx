import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function TodoTask({taskTitle,completedTask,id,iscompleted,deleteTask }) {
  return (
    <div>
      <div className={`flex justify-between mx-10 my-2 hover:bg-gray-200 p-2 rounded-lg ${iscompleted? "line-through":""}`} onClick={()=>completedTask(id)}>
        <div >
          <legend className="ms-10 font-medium ">{taskTitle}</legend>
        </div>
        <div className="me-5 hover:text-red-500" onClick={()=>deleteTask(id)}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  );
}
