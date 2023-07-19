import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const ActiveTasks = () => {
  const {
    actives,
    handleChecked,
    handleChange,
    handleSubmit,
    task,
    activeChecked,
  } = useContext(TaskContext)

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
      {actives.map((active, id) => {
        return (
          <section className='mt-2'>
            {active.task === '' ? (
              ''
            ) : (
              <div
                className='flex gap-1'
                data-aos='fade-down'
                data-aos-offset='200'
                data-aos-easing='ease-in-sine'
                data-aos-duration='600'
              >
                <input
                  type='checkbox'
                  onChange={() => activeChecked(id)}
                  checked={active.complete}
                />
                <p className='lg:text-lg'>{active.task}</p>
              </div>
            )}
          </section>
        )
      })}
    </section>
  )
}

export default ActiveTasks
