import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'

const TasksLayouts = () => {
  return (
    <div className='border border-solid border-red font-roboto text-base p-4'>
      <Header />
      <Outlet />
    </div>
  )
}

export default TasksLayouts
