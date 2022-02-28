import uniqid from 'uniqid'
const Form = ({input,setInput,todos,setTodos}) => {
    const onInputChange = (event) =>{
        setInput(event.target.value);
    }
    const onFormSubmit=(event)=>{
        event.preventDefault();
        setTodos([...todos,{id:uniqid(),title:input,completed:false}])
        setInput("");
    }
    return (  <form>
                <input className="taskBox"type="text" placeholder="Enter task"
                value={input} required
                onChange={onInputChange}></input>
                <button className="form-btn" onClick={onFormSubmit}>add</button>
            </form>
        );
}
 
export default Form;