import React, { useState } from 'react'

const Todo = () => {

    const[task , setTask] = useState([]);
    const[newTask , setNewTask] = useState('');
    
    function handleInputChange(event){
        setNewTask(event.target.value)
        console.log(event.target.value)
    }

    function addTask(){
      if(newTask.trim() === ""){
        alert("Empty Task!"); 
        return;
      }
      if(task.includes(newTask.trim())){
        alert("Task already exists!"); 
        return;
      }
        setTask(prev => [...prev,newTask])
        setNewTask("");
    }

    function deleteTask(index){
       const updatetask = task.filter((_,i) => i !== index);
        setTask(updatetask);
    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){
        
    }

  return (
    <div className='w-full h-screen bg-gray-500'>
        <h1 className='text-center text-4xl font-semibold py-5'>ToDo List</h1>

        <div className='w-[30%] h-[50%] overflow-y-scroll max-h-[75%] relative scroll mx-auto px-2 bg-gray-100 space-x-4 rounded-lg'>

            <input onChange={handleInputChange}
             value={newTask} 
             type="text"
             placeholder='Enter Task' 
             className='border border-black py-1 w-[70%] rounded-md px-2 mt-5 '/>

            <button 
            onClick={addTask}
            className='bg-blue-500 px-3 py-1 text-white rounded-md hover:bg-blue-600 transition-all duration-300'>Add</button>

        <div className='mt-4'>
          <ol>
            {task.map((task,index) => 
              <li key={index}>
                <span className='text-lg'>{task}</span>
                <div className='space-x-5 mt-1'>           
                  <button onClick={() => deleteTask(index)} className='bg-blue-500 px-3 py-1 mb-3 text-white rounded-md hover:bg-blue-600 transition-all duration-300'>Delete</button>
                </div>
              </li>
            )}
          </ol>
        </div>

         

        </div>
    </div>
  )
}

export default Todo