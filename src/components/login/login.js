import React, {useState} from "react"
import "./login.css"
import axios from "axios"

const Login = () => {

    const [ user, setUser] = useState({
        
        email:"",
        password:"",
       
    })

    const handleChange = e => {
        const {name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        /*console.log(e.target)*/
    }

    const login = () =>{
        axios.post("http://localhost:9002/login",user)
        .then(res => console.log(res.data))
    }

    return(
        <div className="loginpage"> 
            {console.log(user)}
            <h1> Login Page</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={ handleChange}></input>
            <input type="password" name="password" value={user.password}placeholder="Enter your password" onChange={ handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button">Signup</div>
        </div>
    )
}

export default Login