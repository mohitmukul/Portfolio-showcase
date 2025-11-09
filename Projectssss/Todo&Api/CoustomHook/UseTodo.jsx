import { CheckCircle, TrashIcon } from "lucide-react";
import { useState } from "react";

export const useTodo=()=>{

    const [todos,setTodos]=useState([]);
    const [filter,setFilter]=useState('all');


   function addTodo(text){

    if(!text.trim())return

    let newtodo={
         id: Date.now(),
            title:text,
            completed:false

    }

    setTodos(prev=>[...prev,newtodo  // this [] is the array of todos ,...prev spread that array and only set the object of new todo inside it
                                    // without disturbing other todos
    ])

   }

   function deleteTodo(id){

    setTodos(todos.filter(todo=>todo.id!==id))

   }
   function Toggletodo(id){

    setTodos(todos.map(todo=>{
       return todo.id==id?{...todo,completed:!todo.completed}:todo;
    }))

   }

   function getFilter(){
    
        if(filter=='active')return todos.filter(todo=>!todo.completed);
        if(filter=='completed')return todos.filter(todo=>todo.completed);
        return todos;
    

   
   }

   const ActiveCount= todos.filter(todo=>!todo.completed).length;
   const CompletedCount= todos.filter(todo=>todo.completed).length;


   return{
    addTodo,
    deleteTodo,
    Toggletodo,
    setFilter,
    todos:getFilter(),
    filter,
    ActiveCount,
    CompletedCount,
    totalCount:todos.length

   }
  

}