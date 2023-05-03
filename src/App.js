      import './App.css';

      import {useState} from "react";



      const filter=[ {text: "Wake up",
      isCompleted:false},

      {text: "Fresh up",
      isCompleted:false},

      {text: "Have BreakFast",
      isCompleted:false}];

      function App() {

         const ToDoList = () => {

          const[tasks,updateTask]=  useState(filter[0])
 
         }

         const toggleTask = index => {

          const newTask =[...filter]

          if(newTask[index].isCompleted)
          {
            newTask[index].isCompleted=false;
          }

          else{
            newTask[index].isCompleted=true;
          }
          updateTask(newTask);
         }

        return (
 <div className="list-of-task">
<h1>React TODO List</h1>

{filter.map((task,index) => (
<div className = "task-status">

  <span onClick={()=> toggleTask(index)}  className={task.isCompleted?"task-name completed-task":"task-name"} >
{index}
{task.text}  
 
</span>

</div>
))}


 </div>
        );
      }

      export default App;
