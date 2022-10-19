import styles from './Task.module.css'

import trashcanSVG from '../assets/trashcan.svg'

import { BsFillCheckCircleFill } from "react-icons/bs";

import { TaskInterface } from './Body'


interface TasksAndDeleteProps {
    description: string,
    taskId: string;
    onDeleteTask: (task: string) => void;
    onCompleteTask: (task: string) => void;
    isCompleted: boolean;
}


export function Task({description, onDeleteTask, onCompleteTask, isCompleted}: TasksAndDeleteProps) {

  function handleDeleteTask() {
    onDeleteTask(description)
  }

  // function handleToggleTaskCompletion() {
  //   onCompleteTask(taskId)
  // }
    
    return(
        <div className={styles.task}>
            <label className={styles.container}>
              <button
                className={styles.radioContainer}
                onClick={() => onCompleteTask(description)}
              >
                {isCompleted ? <BsFillCheckCircleFill /> : <input type="radio" />}
              </button>
              
              <span className={isCompleted ? styles.completedTask : ''}>{description}</span>
            </label>
              
            
            <div className={styles.deleteButton} onClick={handleDeleteTask}><img src={trashcanSVG} alt="Apagar" /></div>
        </div>
    )
}