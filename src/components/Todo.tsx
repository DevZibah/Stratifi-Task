import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const Todo = ({ item, id }) => {
  const { handleChecked } = useContext(TaskContext)

  return (
    <div className='flex gap-1'>
      <input
        type='checkbox'
        onChange={() => handleChecked(id)}
        checked={item.complete}
        className='cursor-pointer'
      />
      <p
        className=' lg:text-lg'
        style={{ textDecoration: item.complete ? 'line-through' : 'none' }}
      >
        {item.task}
      </p>
    </div>
  )
}

export default Todo
