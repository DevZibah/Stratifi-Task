import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  const location = useLocation()

  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <section>
      <header
        className='font-bold text-2xl text-center text-black lg:text-3xl'
        data-aos='fade-down'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        #todo
      </header>
      <main className='flex justify-evenly mt-4 md:mt-5 border-b'>
        <Link to='/'>
          <p
            data-aos='fade-right'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='700'
            className='py-2 border-b-4 transition-colors duration-300'
            style={{
              borderBottom:
                location.pathname === '/' ? '4px solid #2F80ED' : 'black',
            }}
          >
            All
          </p>
        </Link>
        <Link to='/ActiveTasks'>
          <p
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='800'
            className='py-2 border-b-4'
            style={{
              borderBottom:
                location.pathname === '/ActiveTasks'
                  ? '4px solid #2F80ED'
                  : 'black',
            }}
          >
            Active
          </p>
        </Link>
        <Link to='/CompletedTasks'>
          <p
            data-aos='fade-left'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='700'
            className='py-2 border-b-4 transition-colors duration-300'
            style={{
              borderBottom:
                location.pathname === '/CompletedTasks'
                  ? '4px solid #2F80ED'
                  : 'black',
            }}
          >
            Completed
          </p>
        </Link>
      </main>

      {/* <hr className='mt-2' /> */}
    </section>
  )
}

export default Header
