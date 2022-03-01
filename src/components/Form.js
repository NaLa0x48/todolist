import uniqid from 'uniqid'
import { useState } from 'react'
const Form = ({todos,setTodos}) => {
    const [task,setTask] = useState("");
    const onInputChange = (event) =>{
        setTask(event.target.value);
    }
    const onFormSubmit=(event)=>{
        event.preventDefault();
        setTodos([...todos,{id:uniqid(),title:task,completed:false}])
        setTask("");
    }
    return (  <form>
                <input className="taskBox"type="text" placeholder="Enter task"
                value={task} required
                onChange={onInputChange}></input>
                <button className="form-btn" onClick={onFormSubmit}>add</button>
            </form>
        );
}
 
export default Form;
