import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section>
      <header className='font-bold text-2xl text-center text-black lg:text-3xl'>#todo</header>
      <main className='flex justify-evenly mt-4 md:mt-5'>
        <Link to='/'>
          <p>All</p>
        </Link>
        <Link to='/ActiveTasks'>
          <p>Active</p>
        </Link>
        <Link to='/CompletedTasks'>
          <p>Completed</p>
        </Link>
      </main>
      <hr className='mt-2'/>
    </section>
  )
}

export default Header
