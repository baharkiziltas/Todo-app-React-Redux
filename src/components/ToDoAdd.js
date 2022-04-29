import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addToDo } from '../redux/todos/todosSlice'
import { nanoid } from '@reduxjs/toolkit'

export default function ToDoAdd() {

  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addToDo({id: nanoid(), title, completed:false}))

    setTitle('');
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input className='input' placeholder='     Write your plan' type="text" value={title} onChange ={(e) => setTitle(e.target.value)}></input>
        </form>
    
    
    
  
  </div>
  )
}
