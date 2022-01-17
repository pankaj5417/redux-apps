import { useState } from "react";
import { useSelector} from "react-redux";

import { addTodoLoading,
         addTodoError,
         addTodoSuccess,
         getTodoError,
         getTodoLoading,
        getTodoSuccess
                
} from "../features/Todos/actions"



export const Todos = ()=>{

    const [text, setText]=useState()
    const {loading, todos, error}= useSelector(
        (state)=>({
            loading: state.loading,
            todos:state.todos,
            error:state.error,
        }),

        function (prev, curr){
            if(prev.loading===curr.loading && prev.error===curr.error){
                return true
            }
            return false;

        }
    )

  //  const dispatch =useDispatch()
}

/*
const dispatch= useDispatch();

useEffect(()=>{
    getTodos()
},[])

async function getTodos(){
    //dispatch(getData())
try{
    dispatch(getTodosLoading())
    const data= await fetch("").then()
}
}
*/
