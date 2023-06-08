import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
function Login()
{
    const navigate = useNavigate();
   
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function Login(){
        let item ={email,password}
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
        // useEffect(()=>{
            
        // },[])
        if(localStorage.getItem('user-info'))
            {
                navigate("/add");
            }
    }
    return (
        <div className="col-md-6 m-auto text-center">
            
            <div className="mt-5 shadow p-5">
            <h1 className="mb-5">Login</h1>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />
                <br/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
                <br/>
                <button onClick={Login} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}

export default Login;