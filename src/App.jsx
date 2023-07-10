import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../src/style/Global.css'
import Form from './components/Form'
import ThankYou from './components/ThankYou'

function App() {
  return (
    <div className='font-roboto'>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/ThankYou' element={<ThankYou />} />
      </Routes>
    </div>
  )
}

export default App
