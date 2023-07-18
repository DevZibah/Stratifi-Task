import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const ActiveTasks = () => {
  const { actives } = useContext(TaskContext)

  return (
    <section className='mt-4'>
      {actives.map((item, id) => {
        return (
          <section className='mt-2'>
            <div>
              <p>{item.task}</p>
            </div>
          </section>
        )
      })}
    </section>
  )
}

export default ActiveTasks
