import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
function SignUp()
{
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            navigate("/add");
        }
    },[])
    
    const [name,setName]=useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function SignUp(){
        let item ={name,email,password}
        let result = await fetch("http://localhost:8000/api/signup",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result = await result.json();
        // console.log("result: ",result)
        localStorage.setItem("user-info",JSON.stringify(result))
        
    }
    return (
        <div className="col-md-6 m-auto text-center">
            
            <div className="mt-5 shadow p-5">
            <h1 className="mb-5">SignUp</h1>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name" />
                <br/>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />
                <br/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
                <br/>
                <button onClick={SignUp} className="btn btn-primary">Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp;