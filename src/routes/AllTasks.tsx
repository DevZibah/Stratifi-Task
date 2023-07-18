import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const AllTasks = () => {
  const { handleChange, task } = useContext(TaskContext)
  return (
    <section className='mt-4'>
      <main className='flex gap-2'>
        <div>
          <input
            className='border border-solid border-grey rounded-lg w-60 p-1'
            type='text'
            placeholder='add details'
            value={task}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className='border border-solid border-blueShade bg-blueShade text-white p-1 button rounded-lg'>
            Add
          </button>
        </div>
      </main>
    </section>
  )
}

export default AllTasks
