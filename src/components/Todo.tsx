import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const Todo = ({ item, id }) => {
  const { handleChecked } = useContext(TaskContext)

  return (
    <div className='flex gap-2'>
      <input
        type='checkbox'
        onChange={() => handleChecked(id)}
        checked={item.complete}
      />
      <p style={{ textDecoration: item.complete ? 'line-through' : 'none' }}>
        {item.task}
      </p>
    </div>
  )
}

export default Todo
