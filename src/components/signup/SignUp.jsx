import React from "react";
import './signup.css';
import { useState } from "react";
import Axios from 'axios';

const hide = () => {
    document.getElementById('signup').style.display = "none";
    document.getElementById('login').style.display = "flex";
}
const unhide = () => {
    document.getElementById('signup').style.display = "flex";
    document.getElementById('login').style.display = "none";
}

function SignUp(){
  
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [password, setPssword] = useState("");
    const adduser = () => {
        Axios.post('localhost:3001/create',{
            firstname: firstname,
            lastname: lastname,
            password:  password
        }).then(() =>{
            console.log('success');
        });
    }

    return <div  className="home-container">
    <div className="home-container-login" id="signup" >
        <h1 className="signup">SIGN UP</h1>
        <div className="login-inputs">
            <p>First Name</p><input type="text" name="firstName" id="fname" placeholder="Enter First Name" 
            onChange={(event)=>{
               setFirstName(event.target.value);
            }}/> <br />
            <p>Last Name</p><input type="text" name="lastName" id="lname" placeholder="Enter Last Name"
            onChange={(event)=>{
               setLastName(event.target.value);
            }}
            /><br />
            <p>Password</p><input type="password" name="password" id="password" 
            onChange={(event)=>{
                setPssword(event.target.value);
            }}/>
            <br />
            <p>Confirm Password</p><input type="password" name="confirm" id="password2" /><br />
            <button className="btn" onClick={adduser}> SIGN UP</button>
            <h4>Already Have An Account?<button onClick={hide} >LOG IN</button></h4>
        </div>
    </div>
    <div className="home-container-login" id="login">
        <h1 className="signup">LOG IN</h1>
        <div className="login-inputs">
            <p>User Name</p><input type="text" name="firstName" id="fname" placeholder="Enter User Name" /> <br />
            <p>Password</p><input type="password" name="password" id="password" /><br />
            <button className="btn">LOGIN</button>
            <h4>Don't Have An Account?<button className="btn2" onClick={unhide}>SIGN UP</button></h4>
        </div>
    </div>
</div>
}
export default  SignUp;