import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'

const TasksLayouts = () => {
  return (
    <div className='font-roboto text-base p-4 md:p-20 layout text-black'>
      <Header />
      <Outlet />
    </div>
  )
}

export default TasksLayouts
