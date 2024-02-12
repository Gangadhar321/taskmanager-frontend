import { useReducer } from "react";
import TasksContext from "../CreateContext/Tasks";
import Form from "./Form";
import List from "./List";

function reducer(state,action){
    switch(action.type){
        case 'ADD_TASK':{
            return{...state,data:[...state.data,action.payload]}
        }
        case 'REMOVE_TASK':{
            return{...state, data:state.data.filter(ele=>ele.id !== action.payload)}
        }
        case 'SET_TASK':{
            return {...state, selectedTask:action.payload}
        }
        case 'CLEAR_SELECTED_TASK':{
            return{...state, selectedTask:''}
        }
        case 'UPDATE_TASK':{
            return{...state,data:state.data.map(ele=>{
                if(ele.id === action.payload.id) {
                    return {...ele, ...action.payload.id }
                } else {
                    return {...ele }
                }

            })

            }
        }
        default:{
            return {...state.data}
        }
    }
}
 function Container (){
const [tasks,dispatch]=useReducer(reducer,{data:[], selectedTask:''})

return(
    <div className="row">
        <TasksContext.Provider value={{dispatch:dispatch,tasks:tasks}} >
        <h2 style={{textAlign: 'center',color:'purple'}} >Task Management App</h2>
       
        <List/>
        <Form/> 
         </TasksContext.Provider>
    
    </div>
)
}
export default Container;