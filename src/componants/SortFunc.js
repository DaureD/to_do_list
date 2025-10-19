import React, { useContext } from 'react'
import { TaskContext } from './TaskContext'

function SortFunc() {
    const { setSort } = useContext(TaskContext);
    return (
        <div className="SortFunc">
            <button type="button" onClick={() => setSort(0)}>Всі завдання</button>
            <button type="button" onClick={() => setSort(1)}>Виконані</button>
            <button type="button" onClick={() => setSort(2)}>Не виконані</button>
        </div>
    )
}

export default SortFunc