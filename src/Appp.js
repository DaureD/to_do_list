import React, { createContext } from "react"
import Header from './componants/header'
import Tasks from './componants/Tasks'
import AddTask from "./componants/AddTask"
import SortFunc from "./componants/SortFunc"
import { changeList, taskYesNo, addTask, activeChangeTask, deleteTask } from "./componants/Functions"
import { useState, useEffect } from 'react'
import { TaskContext } from './componants/TaskContext'

function Appp() {
    const [list, setList] = useState(() => {
        const savedListJSON = localStorage.getItem('myTasks');
        if (savedListJSON) {
            const savedList = JSON.parse(savedListJSON);
            return savedList;
        } else {
            return ([
                { id: 1, text: 'Піти на тренування', check: true, forInput: false },
                { id: 2, text: 'Лягти спати до 00.00', check: false, forInput: false },
                { id: 3, text: 'Розібратися із 3 лабораторною', check: false, forInput: false }
            ])
        }
    })

    useEffect(() => {
        localStorage.setItem('myTasks', JSON.stringify(list));
    }, [list]);

    const [sortList, setSort] = useState(0);

    return (
        <TaskContext.Provider value={{
            sortList,
            setSort,
            list,
            setList,
            activeChangeTask,
            changeList,
            taskYesNo,
            addTask,
            deleteTask
        }} >
            <SortFunc />
            <Header title="Завдання" />
            <div>
                <div className="Appp">
                    <div className="AllTasks">
                        <Tasks />
                    </div>
                    <div className="AddTask">
                        <AddTask />
                    </div>
                </div>
            </div>
        </TaskContext.Provider>
    )
};

export default Appp