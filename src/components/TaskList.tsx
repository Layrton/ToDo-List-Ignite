import styles from './TaskList.module.css'
import clipboardSVG from '../assets/clipboard.svg'
import { Task } from './Task'

import { TaskInterface } from './Body'


interface TasksAndDeleteProps {
    tasksData: TaskInterface,
    onDeleteTask: (task: string) => void;
    onCompleteTask: (task: string) => void;
}


export function TaskList( { tasksData, onDeleteTask, onCompleteTask }:TasksAndDeleteProps) {
    const isThereMoreThanOneTask = tasksData.length
    return(
        <div className={styles.taskList}>


                {
                    isThereMoreThanOneTask 
                    ? <div className={styles.existingTasks}>;
                    {tasksData.map((task:TaskInterface) => {
                        return (
                            <Task 
                                key={task.id}
                                taskId={task.id}
                                description={task.description}
                                onDeleteTask={onDeleteTask}
                                onCompleteTask={onCompleteTask}
                                isCompleted={task.isCompleted}
                            />
                        )
                    })}
                    </div>
                    : <div className={styles.emptyTaskList}>
                    <img src={clipboardSVG} alt="Nenhuma tarefa cadastrada." />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>


                }




                
                
                
                
        </div>
    )
}