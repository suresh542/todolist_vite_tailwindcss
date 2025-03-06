import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function TodoTaskList({taskTitle,taskId,taskComplete,isComplete,deleteBtn}) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <label className={`w-full flex  hover:bg-gray-200 px-3 py-2 cursor-pointer select-none ${isComplete? "line-through text-slate-600":""} `} onClick={()=>taskComplete(taskId)} >{taskTitle}</label>
        <div className="hover:text-red-500" onClick={()=>deleteBtn(taskId)}>
          <FontAwesomeIcon icon={faXmark} id={taskId} />
        </div>
      </div>
    </div>
  );
}
