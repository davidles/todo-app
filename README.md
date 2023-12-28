# Prueba Técnica de React: To-Do App

Este proyecto es una prueba técnica diseñada para evaluar las habilidades en React JS, centrándose en el manejo de estados, componentes y el ciclo de vida del componente. En el challenge, se espera que se construya una pequeña aplicación de lista de tareas (To-Do) utilizando React js.

## Objetivo

Demostrar las habilidades en:

- **React JS**: Uso efectivo de componentes, estados y ciclo de vida.

## Descripción del Reto

Aplicación de lista de tareas (To-Do) con las siguientes características:

1. **Componentes Interactivos:**
   - Dos componentes interactivos. Un formulario de entrada para agregar nuevas tareas y una lista que muestre las tareas existentes.

2. **Manejo de Estados:**
   - Utiliza estados de React para gestionar la información relevante en la aplicación. Por ejemplo, el estado de las tareas pendientes.

3. **Actualizaciones de Interfaz de Usuario:**
   - Implementa cambios de estado que se reflejan en la interfaz de usuario. Por ejemplo, al agregar o eliminar la tarea completada.

4. **Diseño responsivo:**
   - Diseño de la interfaz adaptada a diferentes dispositivos

## Instrucciones para Ejecutar la Aplicación

### Prerrequisitos

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.

### Pasos para Ejecutar

1. Clona este repositorio:

   ```bash
   git clone https://github.com/davidles/todo-app.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd todo-app
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta la aplicación:

   ```bash
   npm run dev
   ```

5. Abre tu navegador y visita [http://localhost:5173](http://localhost:5173).

## Estructura del Proyecto

El proyecto tiene la siguiente estructura básica:

```
/
|-- src/
|   |-- components/
|   |   |-- TaskContainer.jsx
|   |   |-- TaskForm.jsx
|   |   |-- TaskList.jsx
|   |-- hooks/
|   |   |-- useTasks.js
|   |   |-- useTitle.js
|   |-- App.jsx
|   |-- main.jsx
|-- tests/
|   |-- App.test.jsx
|-- README.md
```

- `src/components/`: Contiene los componentes de la aplicación. Un componente contenedor, que le pasa a través de props el "state" y el "dispatch" a sus componente hijos, que son dos componentes interactivos, TaskForm que agrega una nueva tarea a través de un formulario y TaskList que muestra el estado de la lista de tareas y la  posibilidad de eliminar la tarea realizada
- `src/hooks`: Contiene los custom hooks, useTasks para manejar el estado con useReducer y dos tipos de acciones, ADD_TASK para agregar tarea a la  lista y REMOVE_TASK para eliminar la tarea completada. Además el useTitle que actualiza del título del documento a partir de un useEffect que muestra la cantidad de tareas agregadas de manera dinámica.
- `src/App.jsx`: Punto de entrada principal de la aplicación.
- `src/main.jsx`: Punto de entrada para el renderizado de React.
- `/tests`: Contiene un test(e2e) que comprueba el funcionamiento de la aplicación, según lo requerido. Para realizar los test se utilizó "vitest", "happy-dom" y "react-testing-library".
