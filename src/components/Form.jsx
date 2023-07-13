import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import signupMobile from '../assets/sign-upMobile.svg'
import signupDesktop from '../assets/signupDesktop.svg'

const Form = () => {
  return (
    <div className='md:bg-darkSlateGrey'>
      <section className='border border-solid border-red md:bg-white md:flex'>
        <div className='md:hidden'>
          <img src={signupMobile} alt='' />
        </div>
        <main className='sm:p-3 sm:mt-3'>
          <p className='text-darkSlateGrey font-bold text-3xl'>Stay updated!</p>
          <section className='text-charcoalGrey sm:mt-2 font-normal text-base'>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <article className='sm:mt-2'>
              <div className='sm:mt-2 flex items-center'>
                <BsFillCheckCircleFill className='sm:text-tomato' />
                <p className='ml-1'>
                  Product discovery and building what matters
                </p>
              </div>
              <div className='sm:mt-2 flex items-center'>
                <BsFillCheckCircleFill className='sm:text-tomato' />
                <p className='ml-1'>
                  Measuring to ensure updates are a success
                </p>
              </div>
              <div className='sm:mt-2 flex items-center'>
                <BsFillCheckCircleFill className='sm:text-tomato' />
                <p className='ml-1'>And much more!</p>
              </div>
            </article>
          </section>
          <section className='text-charcoalGrey text-base sm:mt-3 font-bold'>
            <small>Email address</small>
            <div className='border border-solid border-grey rounded-md sm:p-1'>
              <input type='email' placeholder='email@company.com' />
            </div>
          </section>
          <section className='sm:mt-4 border border-solid border-darkSlateGrey sm:p-1 rounded-md bg-darkSlateGrey text-white text-center'>
            <p>Subscribe to monthly newsletter</p>
          </section>
        </main>
        <div className='sm:hidden md:block md:rounded-none'>
          <img src={signupDesktop} alt='' />
        </div>
      </section>
    </div>
  )
}

export default Form
