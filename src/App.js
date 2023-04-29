      import './App.css';
      import {useState} from "react";

      function App() {

        const[task,setTask]=useState(null)

        function comment(val){
          setTask(val.target.value)       
         }



        return (
          <div className="App">
            <div className="page">

<div className="header">
Make a todo List
</div>
<div className="body">
Type your tasks
  <br/>
<input type="text" className="input" onChange={comment} ></input>

<button className="button">Add</button>

<div className="task">{task}</div>
</div>
 
              </div>
          </div> 
        );
      }

      export default App;
