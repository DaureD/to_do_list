import React from 'react'
import Task from './Task'
import TaskForm from './TaskForm'
import { TaskContext } from './TaskContext'
import { useContext } from 'react'
function Tasks(props) {
    const { list, sortList } = useContext(TaskContext)
    let newList;
    switch (sortList) {
        case 0: newList = list
            break;
        case 1: newList = list.filter(task => task.check)
            break;
        case 2: newList = list.filter(task => !task.check)
            break;
    }
    return (
        <div>
            <ul>
                {newList.map(task => ( // перебирає весь масив 
                    task.forInput ? <TaskForm task={task} key={task.id} /> : <Task task={task} key={task.id}/>
                )
                )}
            </ul>
        </div>
    )
}

export default Tasks