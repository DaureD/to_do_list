import React, { useContext } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md"; /*<MdCheckBoxOutlineBlank />*/
import { TiDeleteOutline } from "react-icons/ti";
import { TaskContext } from './TaskContext'

function Task(props) {
    const checkBox = props.task.check
    const { taskYesNo, list, setList, activeChangeTask, deleteTask } = useContext(TaskContext)
    return (
        <div className={`Task ${props.task.check ? 'Task--completed' : ''}`}>
            <ol>{props.task.text}
                {props.task.check ? ' [зробив]' : ' [не зробив]'}
            </ol>
            <div className="icons">
                <div onClick={() => {
                    const yesORno = taskYesNo(list, props.task.id)
                    setList(yesORno);
                }} className="icon-Add">
                    {checkBox ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                </div>
                <IoMdAddCircleOutline onClick={() => {
                    setList(activeChangeTask(list, props.task.id))
                }
                } className="icon-Add" />
                <TiDeleteOutline onClick={()=>{
                    setList(deleteTask(list, props.task.id))
                }}
                    className="icon-Add" />
            </div>
        </div>
    )
}

export default Task