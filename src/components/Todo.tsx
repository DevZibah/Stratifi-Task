import React, { useContext, useEffect } from 'react'
import { TaskContext } from '../contexts/TaskContext'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Todo = ({ item, id }) => {
  const { handleChecked } = useContext(TaskContext)

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <section>
      {item.task === '' ? (
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
            onChange={() => handleChecked(id)}
            checked={item.complete}
            className='cursor-pointer'
          />
          <p
            className='lg:text-lg'
            style={{ textDecoration: item.complete ? 'line-through' : 'none' }}
          >
            {item.task}
          </p>
        </div>
      )}
    </section>
  )
}

export default Todo
