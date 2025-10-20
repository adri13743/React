// Importa 'useState', una función especial de React (Hook) que permite a los 
// componentes funcionales gestionar datos que cambian con el tiempo (el estado).
import { useState } from 'react'
// Importa la imagen (logo) de React desde la carpeta 'assets'.
// React usa el logo como un módulo para que puedas referenciarlo fácilmente.
import reactLogo from './assets/react.svg'
// Importa la imagen (logo) de Vite, referenciada desde la raíz.
import viteLogo from '/vite.svg'
// Importa los estilos CSS específicos para este componente 'App'.
import './App.css'

// Define el componente funcional 'App'. 
// Esta función, cuando es llamada por React, devuelve el HTML (JSX) que se debe mostrar.
function App() {
  // Inicializa variable  estado 'count'  valor inicial 0.
  // 'setCount' función usará para actualizar 'count' y hacer React actualice el componente.
  const [count, setCount] = useState(0)
  // El componente devuelve la estructura de la interfaz (similar a HTML, pero es JSX).
  return (
    // Fragmento de React (<>...</>), se usa para devolver múltiples elementos sin 
    // introducir un nodo DOM adicional.
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
// Exporta el componente 'App' para que pueda ser importado y usado 
// en 'main.jsx' (el punto de entrada de la aplicación).
export default App
