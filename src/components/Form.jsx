import React from 'react'
import { Link } from 'react-router-dom'
import signupMobile from '../assets/sign-upMobile.svg'
const Form = () => {
  return (
    <section>
      <div>
        <img src={signupMobile} alt='' />
      </div>
      <main className='border-solid border-2 border-red sm:p-3 sm:mt-3'>
        <p className='text-darkSlateGrey font-bold text-3xl'>Stay updated!</p>
      </main>
    </section>
  )
}

export default Form
