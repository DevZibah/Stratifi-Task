import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'
import Todo from '../components/Todo'

const AllTasks = () => {
  const { task, todoList, handleChange, handleSubmit } = useContext(TaskContext)
  console.log(task)
  console.log(todoList)

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
            className='border border-solid border-blueShade bg-blueShade text-white p-1 button rounded-lg  allTasks-button'
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </main>
      <article className='mt-3'>
        {todoList.map((item, id) => {
          return (
            <section className='mt-2'>
              <div>
                <Todo item={item} id={id} />
              </div>
            </section>
          )
        })}
      </article>
    </section>
  )
}

export default AllTasks
