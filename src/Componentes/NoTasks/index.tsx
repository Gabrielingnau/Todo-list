import './styles.css'
import { CiMedicalClipboard } from "react-icons/ci";

export function NoTasks () {

  return(
    <div className='noTasks'>
      <CiMedicalClipboard size={56}/>
      <div className="text">
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}