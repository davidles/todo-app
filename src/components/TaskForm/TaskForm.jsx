import React from 'react';

export const TaskForm = ({ addNewTask }) => {

  const handleSubmit = (event) =>{
    event.preventDefault();

    const { elements } = event.currentTarget

    const input = elements.namedItem('task');

    addNewTask({
      type:'ADD_TASK',
      title: input.value
    });

    input.value = ''

  }

  return (
    <form onSubmit={handleSubmit} aria-label='Agragar tarea a la lista' >        
      <label>
        <input name='task' type="text" placeholder='Ej.: Grabar video' required  />
      </label>

      <button>Añadir tarea</button>
    </form>
  )
}
