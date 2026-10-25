import Home from "./components/Home"
import About from "./components/About"
import Content from "./components/Content"
import Project from "./components/Project";
import Login from "./components/Login"
import { useState } from "react";

function App(){
  let name ="syam";
  let age = 21;
  const [count,setCount]=useState(0);
  const [login, setLogin]=useState(false);


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
  


</div>
  );
}

export default App;


