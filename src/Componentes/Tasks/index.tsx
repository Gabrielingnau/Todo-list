import { useState } from 'react';
import './styles.css'
import { PiTrash } from 'react-icons/pi'

interface TasksProps {
  text: string;
  id: string;
  statusTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function Tasks ({ id, text, statusTask, deleteTask }: TasksProps) {

  function handleDeleteTask() {
    event?.preventDefault()
    deleteTask(id);
  }

  function handleCheckTask() {
    event?.preventDefault()
    statusTask(id);
  }

  return (
  <div className="task">
    <div className="wraper">
    <button onClick={handleCheckTask}><div></div></button>
    <p>{text}</p>
    </div>
    <button onClick={handleDeleteTask}><PiTrash size={20}/></button>
  </div>
  )
}