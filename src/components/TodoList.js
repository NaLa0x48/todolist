import {useState} from 'react'
const TodoList = ({todos,setTodos}) => {
    const [todoItem,setTodoItem] = useState("sty");
    const handleDelete = ({id}) =>{
        setTodos(todos.filter((todo)=>todo.id !== id));
    }
    const handleComplete = (todo) => {
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return {...item,completed:!item.completed}

            }
            return item;
            
        }
        )
        );
        if(todo.completed){
            setTodoItem("sty1");
        }
        else
            setTodoItem("sty");
        
    } 
    return (
             <div className="">
                {todos.map((todo) =>(
                    <li key={todo.id} className="list-item"><span className={todoItem}>{todo.title}</span>
                
                    <button clasName="complete-btn"onClick={()=>handleComplete(todo)}>Complete</button>
                    <button className="delete-btn" onClick={()=>handleDelete(todo)}>Delete</button></li>
                ))}
               
            </div> );
}
 
export default TodoList;
