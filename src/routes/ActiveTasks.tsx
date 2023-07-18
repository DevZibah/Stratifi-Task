import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const ActiveTasks = () => {
  const { actives, handleChecked, handleChange, handleSubmit, task } =
    useContext(TaskContext)

  return (
    <section className='mt-4'>
      <main className='flex gap-2 md:gap-3'>
        <div>
          <input
            className='border border-solid border-grey rounded-lg w-60 p-1 allTasks-input'
            type='text'
            placeholder='add details'
            value={task}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className='border border-solid border-blueShade bg-blueShade text-white p-1 button rounded-lg allTasks-button'
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </main>
      {actives.map((item, id) => {
        return (
          <section className='mt-2'>
            <div className='flex gap-1'>
              <input
                type='checkbox'
                onChange={() => handleChecked(id)}
                checked={item.complete}
              />
              <p>{item.task}</p>
            </div>
          </section>
        )
      })}
    </section>
  )
}

export default ActiveTasks
