import React, { useEffect, createContext, useState } from 'react'

export const TaskContext = createContext()
export const TaskContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([])
  const [activeArray, setActiveArray] = useState([])
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
  const handleDelete = (id) => {
    setTodoList([...todoList.slice(0, id), ...todoList.slice(id + 1)])
  }
  const handleClearTodos = () => {
    setTodoList([])
  }
  const actives = todoList.filter((item) => {
    return item.complete === false
  })
  const activeChecked = (id) => {
    const newTodos = [...actives]
    newTodos[id].complete = !newTodos[id].complete
    setActiveArray(newTodos)
  }
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
        activeArray,
        setComplete,
        handleChange,
        handleSubmit,
        handleChecked,
        activeChecked,
        handleDelete,
        handleClearTodos,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
