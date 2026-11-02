import Home from "./components/Home"
import Login from "./components/Login"
import OnChangeonSubmit from "./components/OnChangeonSubmit";
import UsestateObject from "./components/UsestateObject"
import Timer from "./components/Timer"
import AddDeleteArray from "./components/AddDeleteArray";
import Hook from "./components/Hook";
import { useState } from "react";
import {userContext} from "./components/UserContext";
import Api from "./components/Api";
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import About from "./components/About";
import Content from "./components/Content";
import Navbar  from "./components/Navbar";



function App(){

  let name ="syam";
  let name1 ="bhardwaj";
  let age = 21;
  const [count,setCount]=useState(0);
  const [login, setLogin]=useState(false);
  const [state,setState]=useState(false);
const router =createBrowserRouter([
  {
    path : "/",
    element :
    <div>
          <Navbar/>
          <Home name={name} count={count} setcount={setCount}/>

    </div>
  },
  {
    path : "/about",
    element: <div>
          <Navbar/>
          <About/>

    </div>
  },
{
  path:"/content",
  element: <div>
          <Navbar/>
          <Content/>

    </div>
},
]);



  return (

    <userContext.Provider value={name1}>
  
   
  <RouterProvider router={router}/>
  <Login setLogin={setLogin} login={login}/>
  <p>{name}</p>

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

{/* lifting stateup mean omving state from a child component to its common parent component 
so that multiple child components can share the same data */}


{/* Props drilling means passing data through multiple components using props,
 even when the middle components don't need that data themselves. */}

 {/* Context api is used to store data globally and access it directly in any componeent
 without passing props manually  */}
 {/* li=nk dont l=know wheather we are in that , nav link used to know wherather it isavtive or not , navigate  */}



  <Api/>
</userContext.Provider>


  );
}

export default App;


