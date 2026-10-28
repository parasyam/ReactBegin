import React, { useContext } from "react";
import { userContext } from "./UserContext";

const Profile = (prop)=>{
    const name=useContext(userContext);
    return <div>
            <p>this is from props{prop.name}</p>
            <p>this is user Context {name}</p>
        </div>
    
    
};

export default Profile;