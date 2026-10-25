import react ,{useState} from "react"

const AddDeleteArray = ()=>
{
    const [fruits,setFruits]=useState(["Apple","banana"]);
    const [element,setElement] = useState("");
    const handleClick =()=>{
        setFruits([...fruits,element])
        console.log(element);
        setElement("");
    }
    const handleAdd=(event)=>{
        setElement(event.target.value);
    }
    const handleDelete=(index)=>{
        let temp=[...fruits];
        temp.splice(index,1);
        setFruits(temp);
    }
    return <div>
        {fruits.map((fruit,index)=>(
            <div>

            <p key={index}>{fruit}</p>
            <button onClick={()=>handleDelete(index)}>Delete</button>
            </div>
        ))}
        <input onChange={handleAdd} value={element}></input>
        <button onClick={handleClick}>ADD</button>
    </div>
}

export default AddDeleteArray;