import './styles.css'
import { Header } from '../../Componentes/Header'
import { NumberTasks } from '../../Componentes/NumberTasks';
import { Tasks } from '../../Componentes/Tasks';
import { TasksChecking } from '../../Componentes/TasksChecking';
import { GoPlusCircle  } from "react-icons/go";
import { v4 as id } from 'uuid';
import { ChangeEvent,  useState } from 'react';
import { NoTasks } from '../../Componentes/NoTasks';

export function App () {

  const [tasks, setTasks] = useState([
    {
      id: id(),
      title: 'lldlsd',
      idChecking: false
    }
  ])
  
  const [NewTaskText, setNewTaskText] = useState('')
  
  function handleCreateNewComment () {

    if (NewTaskText === '' || NewTaskText === ' ') {
      return alert('Preencha com uma tarefa válida');
    }
    setTasks([
      ...tasks,
      {
        id: id(),
        title: NewTaskText,
        idChecking: false
      }
    ]);

    setNewTaskText('')
  }

  function handleCreateNewTaskChange (event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function deleteTask(id: string) {
    const tasksWithoutGeleteOne = tasks.filter(task => {
      return task.id !== id
    })
   setTasks(tasksWithoutGeleteOne)
  }

  function statusTask(id: string) {
    const taskWithThisIdTask  = tasks.filter(task => {
      return task.id === id
    })
    taskWithThisIdTask.map(item => {
      if (item.idChecking === false) {
        return (item.idChecking = true)
      } else {
        return (item.idChecking = false)
      }
    })

   setTasks([...tasks])
  }; 


let tasksChecking = tasks.filter((task) => {
   return task.idChecking == true
}, {});

const numberOfTasksCreated = tasksChecking.length
  return (
    <div>
      <Header/>

      <div className="wraper">
      <main>
        <header>
          <input 
          value={NewTaskText}
          onChange={handleCreateNewTaskChange}
          type="text" 
          placeholder='Adicione uma nova tarefa'
          />
          <button 
          type='submit' 
          onClick={handleCreateNewComment}>
            Criar
            <GoPlusCircle/>
          </button>
        </header>
        <form>
          <div className="controllers">
          <NumberTasks placar={tasks.length} tasksChecking={numberOfTasksCreated} text='Tarefas criadas'/>
          <NumberTasks purple placar={tasks.length} tasksChecking={numberOfTasksCreated} text='Concluidas'/>
          </div>
          <div className="tasks">

          {tasks.map(task => {
            if(task.idChecking == false) {
              return (
                <Tasks
                  key={task.id}
                  id={task.id}
                  text={task.title}
                  deleteTask={deleteTask}
                  statusTask={statusTask}
                />
              )
            }
            if(task.idChecking == true) {
              return (
                <TasksChecking
                  key={task.id}
                  id={task.id}
                  text={task.title}
                  deleteTask={deleteTask}
                  statusTask={statusTask}
                />
              )
            }
          })

          }

          {tasks.length === 0 && <NoTasks/>}
          </div>
        </form>
      </main>

      </div>
    </div>
  )
}