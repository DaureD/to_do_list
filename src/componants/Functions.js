import React from 'react'
export const changeList = (list, taskID, newData) => {
    return (
        list.map(task =>
            task.id === taskID ? { ...task, text: newData, forInput: !task.forInput } : task
        )
    )
}

export const taskYesNo = (list, taskID) => {
    return (
        list.map(task =>
            task.id === taskID ? { ...task, check: !task.check } : task
        )
    )
}

    export const activeChangeTask = (list, taskID) => {
        return (
            list.map(task =>
                task.id === taskID ? { ...task, forInput: !task.forInput } : task
            )
        )
    }

export const addTask = (list, task) => {
    const id = Date.now();
    return (
        [...list, { id, text: task, check: false, forInpur: false }]
    )
}

export const deleteTask = (list, taskID) => {
    return(
        list.filter(task => task.id !== taskID)
        )
}