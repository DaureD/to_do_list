import React from 'react';
import { useState, setState } from 'react'
import { TaskContext } from './TaskContext'
import { useContext } from 'react';
function AddTask(props) {
    const [newTask, setNewTask] = useState('')
    const { list, setList, addTask } = useContext(TaskContext)
    return (
        <div>
            <div>
                <input
                    placeholder='Завдання'
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)} /><br />
                    
                <div onClick={() => {
                    if(newTask!==''){
                    const newList = addTask(list, newTask);
                    setList(newList)
                    setNewTask('');
                    }
                }} id="forTest">Додати завдання</div>
            </div>
        </div>
    )
}

export default AddTask
