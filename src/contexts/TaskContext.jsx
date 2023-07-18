import React, { useEffect, createContext, useState } from 'react'

export const TaskContext = createContext()
export const TaskContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([])
  const [task, setTask] = useState('')
  const [complete, setComplete] = useState(false)

  const handleChange = (e) => {
    setTask(e.target.value)
  }
  const handleSubmit = (e) => {
    const id = todoList.length + 1
    localStorage.setItem(
      setTodoList((prev) => [
        ...prev,
        {
          id: id,
          task: task,
          complete: complete,
        },
      ])
    )
    setTask('')
  }
  const handleChecked = (id) => {
    const newTodos = [...todoList]
    newTodos[id].complete = !newTodos[id].complete
    setTodoList(newTodos)
  }
  const actives = todoList.filter((item) => {
    return item.complete === false
  })
  const completed = todoList.filter((item) => {
    return item.complete === true
  })
  return (
    <TaskContext.Provider
      value={{
        task,
        todoList,
        actives,
        completed,
        setComplete,
        handleChange,
        handleSubmit,
        handleChecked,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
