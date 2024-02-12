import { useContext, useState,useEffect } from "react"
import TasksContext from "../CreateContext/Tasks"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function List (){
    const {dispatch,tasks}= useContext(TasksContext)
    const [modal,setModal]=useState(false)
    const [task,setTask]=useState(undefined)
    const[isEDit,setIsEdit]=useState(false)

    const handleRemove=(id)=>{
        const userInput = window.confirm('Are you sure you want to remove this task?')
        if(userInput){
        dispatch({type : "REMOVE_TASK" , payload : id})
        }
 }
 const handleSelected=(id)=>{
    console.log(id)
    dispatch({type : "SET_TASK" , payload : id})
   setModal(true)
 }

 const toggle=()=>{
    setModal(!modal)
    dispatch({type: 'CLEAR_SELECTED_TASK'})
    setIsEdit(false)
    setTask(undefined)
 }
    
const handleSave=()=>{
    setModal(false)
    setIsEdit(false)
    dispatch({type: 'CLEAR_SELECTED_TASK'})
    dispatch({ type: 'UPDATE_TASK', payload: task })
}
const handleChange=(e)=>{
    setTask({...task, [e.target.name]: e.target.value })

}
const handleEdit=()=>{
setIsEdit(true)

}
const handleSubmit=(e)=>{
e.preventDefault()
}
useEffect(() => {
    if(tasks.data.length > 0) {
        setTask(tasks.data.find(ele => ele.id === tasks.selectedTask))
    }
}, [tasks.selectedTask])

    const chooseColors = (status)=>{
        if(status === "TO DO"){
            return "badge text-bg-warning"
        }
        else if (status === "In Progress"){
            return "badge text-bg-light"
        }
        else if (status === "Done"){
            return "badge text-bg-success"
        }
    }

    return(
        <div className="col-md-6">

            <h3 style={{color:'tomato'}}>Listing Tasks-{tasks.data.length}</h3>
            <h3>selectedTask-{tasks.selectedTask}

            {task&& (<div>
            <Modal isOpen={toggle} toggle={toggle}>
                <ModalHeader toggle={toggle}>Title
                {isEDit ? 'EditTask':(task.title)}
                </ModalHeader>

                <ModalBody>
                    {
                        isEDit ? (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                <label className="form-label">title</label>
                                <input 
                                            type="text" 
                                            className="form-control" 
                                            value={task.title} 
                                            name="title"
                                            onChange={handleChange}
                                        /> 
                                </div>
                                <div className="form-group">
                                <label className="form-label">description</label>  
                                 <textarea
                                 className="form-control"
                                 value={task.description}
                                 name="description"
                                 onChange={handleChange}>
                                </textarea>
                                </div>
                                <div className="form-group">
                                <label className="form-label">Select Status</label>
                                <select  value={task.status} className="form-control" name="status" onChange={handleChange}>
                                            <option value="To Do">To Do</option>
                                            <option value="In Progress">In Progress</option>
                                            <option value="Done">Done</option>

                                </select>
                                </div>
                                </form>
                        ):task.description
                    }
                    </ModalBody>
                <ModalFooter>
                    {isEDit ? <button color="success" onClick={() => handleSave()}>Save</button>:
                    <Button color="primary" onClick={handleEdit}>EditTask</Button>}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                        </Modal>
                        </div> )}
                
            
           
            </h3>
            <ul className="list-group">
                {tasks.data.map(ele =>
                    <li  class="list-group-item"
                    style={{color:'green',backgroundColor: 'chocolate'}}
                     key={ele.id}>{ele.title}
                     
                     <div className="float-end"><span className={chooseColors(ele.status)}>{ele.status}</span>
                    <button  class="btn btn-primary"onClick={()=>handleRemove(ele.id)} >Remove</button>
                    <button class="btn btn-secondary"onClick={()=>handleSelected(ele.id)}>view</button></div>
                    </li>
                    )}
            </ul>
            
        </div>
    )
}
export default List

