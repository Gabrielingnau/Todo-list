import './styles.css'

interface NumberTasksProps {
  text: string;
  purple?: boolean;
  placar?: number
  tasksChecking?: number;
}

export function NumberTasks ({text, purple, placar, tasksChecking}:NumberTasksProps) {

  return(
    <div className='numberTasks'>
      <p className={purple ? 'colorPurple' : 'colorBlue'}>{text}</p>
      <div className={purple ? 'placarChecking' : 'placar'}>
        <p className='noChecking'>{placar}</p>
        <p className='checking'>{tasksChecking}</p>
        <p className='checking'>de</p>
        <p className='checking'>{placar}</p>
      </div>
    </div>
  )
}