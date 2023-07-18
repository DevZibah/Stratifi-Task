import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { TaskContextProvider } from './contexts/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TaskContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TaskContextProvider>
)
