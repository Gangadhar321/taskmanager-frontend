// import { useState,useContext } from "react"
// import TasksContext from "../CreateContext/Tasks"

// function Form(){

//     const[title,setTitle] = useState('')
//     const[discription,setDiscription]= useState('')
//     const[formErrors,setFormErrors] = useState ({})
//     const{dispatch} = useContext(TasksContext)

//     const errors = {}
//     function runValidations(){
//         if(title.trim().length===0){
//             errors.title="title is required"
//         }
//         if(discription.trim().length===0){
//             errors.discription="discription  is required"
//         }
//     }

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         runValidations()

//         if(Object.keys(errors).length===0){
//             setFormErrors({})
//             const formData = {
//                 id:Number(new Date()),
//                 title : title,
//                 discription : discription,
//                 status:"TO DO"
//             }
//             dispatch({type:"ADD_TASK",payload : formData})
//         }
//         else{
//             setFormErrors(errors)
//         }
//         setDiscription('')
//         setTitle('')
       

//     }
//     const handleChangeTitle=(e)=>{
//         setTitle(e.target.value)
//     }
//     const handleChangeDescription=(e)=>{
//         setDiscription(e.target.value)
//     }

//     return(
//         <div className="col-md-6">
//             <h2>Add Task</h2>
//             <form onSubmit={handleSubmit}>
                
//                 <label class="form-label">Enter Title</label><br/>
//                 <input type="text"
                
//                 value={title}
//                 class="form-control"
//                 className="form-control is-invalid"
//                 onChange={handleChangeTitle} 
//                  className="form-control is-valid"
//                 />
                
//                 {formErrors.title && <span>{formErrors.title}</span>}
//                 <br/>

//                 <label class="form-label">Enter discription</label><br/>
//                 <textarea value={discription} 
//                 className="form-control is-valid"
//                 class="form-control"
//                 className="form-control is-invalid"
//                 onChange={handleChangeDescription}>
                    
//                 </textarea>
//                 {formErrors.discription && <span>{formErrors.discription}</span>}
//                 <br/>

//                 <input type="submit" class="btn btn-primary"/>
//             </form>
//         </div>
//     )
// }
// export default Form

import { useState, useContext } from "react";
import TasksContext from "../CreateContext/Tasks";

function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const { dispatch } = useContext(TasksContext);

  const errors = {};

  function runValidations() {
    if (title.trim().length === 0) {
      errors.title = "Title is required";
    }
    if (description.trim().length === 0) {
      errors.description = "Description is required";
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    runValidations();

    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      const formData = {
        id: Number(new Date()),
        title: title,
        description: description,
        status: "TO DO",
      };
      dispatch({ type: "ADD_TASK", payload: formData });
    } else {
      setFormErrors(errors);
    }
    setDescription('');
    setTitle('');
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="col-md-6">
      <h3 style={{color:'darkpurple'}}>Add Task</h3>
      <form onSubmit={handleSubmit}>
        <label style={{color:'limegreen'}}  className="form-label">Enter Title</label><br />
        <input
        style={{color:'hotpink'}}
          type="text"
          value={title}
          className={`form-control ${formErrors.title ? 'is-invalid' : 'is-valid'}`}
          onChange={handleChangeTitle}
        />
        {formErrors.title && <span>{formErrors.title}</span>}
        <br />

        <label  style={{color:'limegreen'}}className="form-label">Enter Description</label><br />
        <textarea
          value={description}
          style={{color:'blue'}}
          className={`form-control ${formErrors.description ? 'is-invalid' : 'is-valid'}`}
          onChange={handleChangeDescription}
        ></textarea>
        {formErrors.description && <span>{formErrors.description}</span>}
        <br />

        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default Form;

