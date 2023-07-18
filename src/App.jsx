import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../src/style/Global.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import AllTasks from './routes/AllTasks'
import TasksLayouts from './Layouts/TasksLayouts'
import ActiveTasks from './routes/ActiveTasks'
import CompletedTasks from './routes/CompletedTasks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TasksLayouts />,
    children: [
      {
        path: '/',
        element: <AllTasks />,
      },
      {
        path: '/ActiveTasks',
        element: <ActiveTasks />,
      },
      {
        path: '/CompletedTasks',
        element: <CompletedTasks />,
      },
    ],
  },
])

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
