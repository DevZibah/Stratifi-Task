import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const CompletedTasks = () => {
  const { completed } = useContext(TaskContext)

  return (
    <section className='mt-4'>
      {completed.map((item, key) => {
        return (
          <div key={key}>
            <p>{item.task}</p>
          </div>
        )
      })}
    </section>
  )
}

export default CompletedTasks
