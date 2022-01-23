import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodoError, addTodoLoading, addTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess, removeTodo } from "../features/Todos/actions";
import { addTodo } from "../store/action";
export const Todos =()=>{
    const [text, setText]=useState("")
    const {todos}=useSelector((state)=>({todos:state.todos}))
    /*
    const {loading,todos,error}=useSelector((state)=>({
        loading:state.loading,
        todos:state.todos,
        error:state.error
    }), function(prev,curr){
        if(prev.loading===curr.loading&&prev.error===curr.error){
            return true
        }
        return false
    })
    */
     const dispatch=useDispatch()
     /*
     useEffect(()=>{
        getTodos()

        
         },[])


        
  
         async function getTodos(){
            try{
                dispatch(getTodoLoading())
              const data= await  fetch("http://localhost:3001/todos")
             .then((d)=>d.json())
             dispatch(getTodoSuccess(data))

            }catch(e){
             dispatch(getTodoError(e))
            }
        } 
        */
     const addTodo=()=>{
        dispatch(addTodoLoading())
        fetch("http://localhost:3001/todos", {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({status:false, title:text})
        }).then((d)=>d.json()).then((res)=>{
            //success
            dispatch(addTodoSuccess(res))
          //  getTodos()

        }).catch(err=>{
            //error
            dispatch(addTodoError(err))

        })


     }
     function deleteTodo(id){
        dispatch(removeTodo(id))
    }
   
     
    return (
        <div>
            <input type="text" value={text} placeholder="Enter Todo" onChange={(e)=>setText(e.target.value)} />

            <button onClick={()=>{
                dispatch(addTodoSuccess(text))
               //loading
            // addTodo()
            }}>Add Todo</button>
            { todos.map((e)=>(<div>{e.title}-{e.status ?"Done":"Not done"}
            
            <button className="delete-btn" onClick={(d)=>{d.preventDefault()
                deleteTodo(e.id)}}>Delete</button>
            </div>
            
           
         
            ))}

        </div>
    )
}