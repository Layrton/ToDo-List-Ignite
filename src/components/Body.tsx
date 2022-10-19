import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './Body.module.css'
import createSVG from '../assets/create.svg'
import { TaskList } from './TaskList'


export interface TaskInterface {
    id: string,
    description: string;
    isCompleted: boolean
}

export function Body() {

    const [tasks, setTasks] = useState([{
        id: crypto.randomUUID(),
        description: 'post teste',
        isCompleted: false
    }])

    const [newTaskDescription, setNewTaskDescription] = useState('')

    const tasksLength = tasks.length
    const completedTasks = tasks.filter(task => task.isCompleted).length


    function handleCreateNewTask (event:FormEvent) {
        event.preventDefault()

        const objectNewTaskDescription = {
            id: crypto.randomUUID(),
            description: newTaskDescription,
            isCompleted: false,
        }
        setTasks([...tasks, objectNewTaskDescription])
        setNewTaskDescription('')
    }

    function handleNewTaskDescription(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewTaskDescription(event.target.value)
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => task.description != taskToDelete)
        setTasks(tasksWithoutDeletedOne);
    }

    function toggleCompletedTasks(taskToComplete : string) {
        
        const newTasks = tasks.map(task => {
            if (task.description === taskToComplete) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                }
            }
            return task;
        })
        setTasks(newTasks)
    }

    return(
        
        
        <div className={styles.body}>
            <form action="" onSubmit={handleCreateNewTask}>
                <textarea
                    name="task" 
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleNewTaskDescription}
                    value={newTaskDescription}
                    required
                />
                <button type="submit">Criar <img src={createSVG} /> </button>
            </form>

            <section className={styles.tasks}>
                <div>
                    <div className={styles.createdTasks}>Tarefas Criadas <div className={styles.counter}>{tasksLength}</div></div>
                    <div className={styles.finishedTasks}>Concluídas <div className={styles.counter}>{completedTasks} de {tasksLength}</div></div>
                </div>
                <TaskList tasksData={tasks} onDeleteTask={deleteTask} onCompleteTask={toggleCompletedTasks} />
            </section>
        </div>
    )
}