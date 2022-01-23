import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoError, addTodoLoading, addTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess,getData } from "../features/Todos/actions";
import { addTodo } from "../store/action";
export const Todos =()=>{
    const [text, setText]=useState({
        title:"",
        id:""
    })
    const {loading,todos,error}=useSelector((state)=>({
        loading:state.todosState.loading,
        todos:state.todosState.todos,
        error:state.todosState.error
    }), function(prev,curr){
        if(prev.loading===curr.loading&&prev.error===curr.error){
            return true
        }
        return false
    })
     const dispatch=useDispatch()
     useEffect(()=>{
        getTodos()
         },[])
  
         async function getTodos(){
             dispatch(getData())
           /*
            try{
                dispatch(getTodoLoading())
              const data= await  fetch("http://localhost:3001/todos")
             .then((d)=>d.json())
             dispatch(getTodoSuccess(data))

            }catch(e){
             dispatch(getTodoError(e))
            }
            */
        } 
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
            //getTodos()
            dispatch(getData())

        }).catch(err=>{
            //error
            dispatch(addTodoError(err))

        })


     }
    return loading?<div>Loading.....</div> :error?<div>Something went wrong</div> :(
        <div>
            <input type="text" value={text} placeholder="Enter Todo" onChange={(e)=>setText(e.target.value)} />

            <button onClick={()=>{
               // dispatch(addTodo(text))
               //loading
             addTodo()
            }}>Add Todo</button>
            { todos.map((e)=>(<div>{e.title}-{e.status ?"Done":"Not done"}</div>))}
        </div>
    )
}