import React from 'react'
import { TaskList } from '../TaskList/TaskList'
import { TaskForm } from '../TaskForm'
import { useTasks } from '../../hooks/useTasks'
import { useTitle } from '../../hooks/useTitle'


export const TaskContainer = () => {
    // Manejo de estado global con el custom hook
    const {state, dispatch} = useTasks();

    const titleParam = state?.length > 0 ? `(${state?.length}) To-Do List` : 'To-Do List'

    useTitle(titleParam)

    return (
        <div className='container'>
            <h3>Lista de tareas</h3>         
            <TaskForm addNewTask={dispatch} />
            <TaskList tasks={state} removeItem={dispatch}  />
        </div>
    )
}
