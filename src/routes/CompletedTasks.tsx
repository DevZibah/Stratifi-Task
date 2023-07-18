import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'
import { MdDelete } from 'react-icons/md'

const CompletedTasks = () => {
  const { completed, handleChecked, handleDelete, handleClearTodos } =
    useContext(TaskContext)

  return (
    <section className='mt-4'>
      {completed.map((item, id) => {
        return (
          <section className='mt-2 flex justify-between'>
            <div className='flex gap-1' key={id}>
              <input
                type='checkbox'
                onChange={() => handleChecked(id)}
                checked={item.complete}
                className='cursor-pointer'
              />
              <p
                style={{
                  textDecoration: item.complete ? 'line-through' : 'none',
                }}
              >
                {item.task}
              </p>
            </div>
            <article>
              <MdDelete
                onClick={() => handleDelete(id)}
                className='cursor-pointer'
              />
            </article>
          </section>
        )
      })}
      <article className='flex justify-end'>
        <div
          onClick={handleClearTodos}
          className='border border-solid border-tomato flex gap-0.5 items-center text-sm text-white bg-tomato mt-4 w-28 rounded p-1 right-0 justify-center cursor-pointer'
        >
          <MdDelete />
          <p>delete all</p>
        </div>
      </article>
    </section>
  )
}

export default CompletedTasks
