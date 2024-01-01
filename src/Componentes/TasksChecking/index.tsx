import './styles.css'
import { PiTrash } from 'react-icons/pi'
import { FaCheck } from "react-icons/fa6";
import { useState } from 'react';

interface TasksCheckingProps {
  text: string;
  id: string;
  statusTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function TasksChecking ({ id, text, statusTask, deleteTask }: TasksCheckingProps) {

  function handleDeleteTask() {
    event?.preventDefault()
    deleteTask(id);
  }

  function handleCheckTask() {
    event?.preventDefault()
    statusTask(id);
  }

  return (
  <div className="tasksChecking">
    <div className="wraper">
    <button onClick={handleCheckTask}><div><FaCheck size={10}/></div></button>
    <p>{text}</p>
    </div>
    <button onClick={handleDeleteTask}><PiTrash size={20}/></button>
  </div>
  )
}