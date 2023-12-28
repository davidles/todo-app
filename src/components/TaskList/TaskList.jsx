import React from 'react';

export const TaskList = ({ tasks = [], removeItem }) => {

  const handleRemove = (idParam) => () => removeItem({
    type: 'REMOVE_TASK',
    id: idParam
  })

  return (
    <section>
      {
        tasks.length === 0
          ? (<strong>No hay tareas cargadas</strong>)
          : (
            <ul>
              {
                tasks.map(({ id, title }) => (
                  <li key={id}>
                    {title}
                    <button onClick={handleRemove(id)}>X</button>
                  </li>
                ))
              }
            </ul>
          )
      }

    </section >
  )
}
