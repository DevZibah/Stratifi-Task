import React, { useEffect, createContext, useState } from 'react'

export const TaskContext = createContext()
export const TaskContextProvider = ({ children }) => {
  const [state, setState] = useState([])
  const handleChange = (e) => {
    const value = e.target.value
    setState({
      ...state,
      [e.target.name]: value,
    })
  }
  return (
    <TaskContext.Provider value={{ value, handleChange }}>
      {children}
    </TaskContext.Provider>
  )
}
