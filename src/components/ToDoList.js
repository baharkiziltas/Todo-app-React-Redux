import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggle, deleteButton } from '../redux/todos/todosSlice';


export default function ToDoList() {

    const dispatch = useDispatch();

    const items = useSelector(state => state.todos.items);
    console.log(items)
    return (
        <div>
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item.id} class="list-group-item list-group-item-dark mylist">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            onChange={() => dispatch(toggle({ id: item.id }))} value="" id="flexCheckDefault">
                        </input>
                        {item.title}
                        <button className='deleteButton' onClick={() => dispatch(deleteButton(item.id))} >x</button>
                    </li>

                ))}

            </ul>
        </div>
    )
}
