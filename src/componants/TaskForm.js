import React, { useContext, useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { TaskContext } from './TaskContext'

function TaskForm(props) {
    const { taskYesNo, list, setList, changeList, activeChangeTask } = useContext(TaskContext)
    const [inputText, setInputText] = useState(props.task.text)
    return (
        <div className="Task">
            <input className="input-task" placeholder="Завдання" value={inputText}
                onChange={(event) => setInputText(event.target.value)}
            />
            <div className="icons">
                <button type="button" className='save-change'
                    onClick={() => {
                        setList(changeList(list, props.task.id, inputText))
                    }}>Зберегти</button>
                <button onClick={() => {
                    setList(activeChangeTask(list, props.task.id))
                }}>Скасувати</button>
            </div>
        </div >
    )
}

export default TaskForm