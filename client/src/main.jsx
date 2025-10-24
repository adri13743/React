// Importa 'StrictMode', una herramienta de React que ayuda a encontrar errores
// y advertencias potenciales en la aplicación durante el desarrollo.
import { StrictMode } from 'react'
// Importa 'createRoot', el método moderno para decirle a React
// dónde montar la aplicación en el DOM (el HTML real del navegador).
import { createRoot } from 'react-dom/client'

import { Usuarios } from './basico/usuarios'

import './styles.css';

// Busca el elemento DOM donde se inyectará la aplicación.
// En el archivo 'index.html' (típicamente), hay un <div> con id="root".
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usuarios  />
  </StrictMode>,
)
