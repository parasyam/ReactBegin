import React from "react";
const Login = (props) =>{
    const login=props.login;
    const handleButton = ()=>{
        
            props.setLogin(!login);
    }

    return <div>

        {login ? <p>logged in sucess</p> : <p>log in fail </p>}
        {/* for calling normal function we can just call in  {}
         but for sending paramaters we need to use arrow function like onClick{()=>{
            clickbutton("shyam")}}  */}
        <button onClick={handleButton}>login</button>

    </div>
}
export default Login;