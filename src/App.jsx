import Home from "./components/Home"
import About from "./components/About"
import Content from "./components/Content"
import Project from "./components/Project";
import Login from "./components/Login"
import OnChangeonSubmit from "./components/OnChangeonSubmit";
import UsestateObject from "./components/UsestateObject"
import Timer from "./components/Timer"
import AddDeleteArray from "./components/AddDeleteArray";
import Hook from "./components/hook";
import { useState } from "react";

function App(){
  let name ="syam";
  let age = 21;
  const [count,setCount]=useState(0);
  const [login, setLogin]=useState(false);
  const [state,setState]=useState(false);


  return (
 <div>
  <Home name={name} count={count} setcount={setCount}/>
  <Login setLogin={setLogin} login={login}/>
  <p>{name}</p>
  <About/>
  <Project/>
  <Content/>

  {/* hopks - useState 
  instalizing const [name,setNmae]= useState(intial value)
  updating setName(new value) */}
  
  <OnChangeonSubmit/>
  <UsestateObject/>
   <button onClick={()=>{
            setState(!state)
        }}>{state ? "stop Timer" : "start timer"}</button>
        {state && <Timer/>}
      
      <AddDeleteArray/>
      <Hook/>


</div>
  );
}

export default App;


