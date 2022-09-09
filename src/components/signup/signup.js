import React, {useState} from "react"
import "./signup.css"
import axios from "axios"


const Signup = () => {

    const [ user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const handleChange = e => {
        const {name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        /*console.log(e.target)*/
    }

    const signup = () => {
        const {name, email, password, confirmPassword} = user
        if(name && email && password && (password == confirmPassword)){
            axios.post("http://localhost:9002/signup", user)
            .then( res => console.log(res))
            
        }else{
            alert("Invalid")
        }
        
    }

    return(
        <div className="signuppage"> 
        <h1> Signup</h1>
        <input type="text" name="name" value={user.name} placeholder="Enter your name" onChange={ handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={ handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Enter a new password" onChange={ handleChange}></input>
        <input type="password" name="confirmPassword" value={user.confirmPassword} placeholder="Confirm the new password" onChange={ handleChange}></input>
        <div className="button" onClick={signup}>Signup</div>
        <div>or</div>
        <div className="button">Login</div>
    </div>
    )
}
export default Signup