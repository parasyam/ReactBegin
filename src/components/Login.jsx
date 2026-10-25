import React from "react";
const Login = (props) =>{
    const login=props.login;

    return <div>

        {login ? <p>logged in sucess</p> : <p>log in fail </p>}
        <button onClick={()=>{
            props.setLogin(true);
        }}>login</button>

    </div>
}
export default Login;