import {useState} from 'react'
const TodoList = ({todos,setTodos}) => {

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
        console.log(todo);
    } 
    return (
             <div className="todos">
                {todos.map((todo) =>(
                    <li key={todo.id} className="list-item"><div className="title" style={{textDecoration: todo.completed ? "line-through" : ""}}>{todo.title}</div>
                
                    <button className="complete-btn"onClick={()=>handleComplete(todo)}>Complete</button>
                    <button className="delete-btn" onClick={()=>handleDelete(todo)}>Delete</button></li>
                ))}
               
            </div> );
}
 
export default TodoList;
