import React, { useState } from 'react'

const Todo = () => {

    const[task , setTask] = useState([]);
    const[newTask , setNewTask] = useState('');
    
    function handleInputChange(event){
        setNewTask(event.target.value)
        console.log(event.target.value)
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){
        
    }

  return (
    <div className='w-full h-screen bg-gray-500'>
        <h1 className='text-center text-4xl font-semibold py-5'>ToDo List</h1>

        <div className='w-[30%] h-3/4 mx-auto px-2 bg-gray-100 space-x-4 rounded-lg'>

            <input onChange={handleInputChange} value={newTask} type="text" id="" placeholder='Enter Task' 
            className='border border-black py-1 w-[70%] rounded-md px-2 mt-5 '/>

            <button className='bg-blue-500 px-3 py-1 text-white rounded-md hover:bg-blue-600 transition-all duration-300'>Add</button>

         <div className='space-x-5 mt-3'>           
            {/* <button className='bg-blue-500 px-3 py-1 text-white rounded-md hover:bg-blue-600 transition-all duration-300'>Delete</button> */}
         </div>

        </div>
    </div>
  )
}

export default Todo