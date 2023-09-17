import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './CSS/signup.css';

export function LoginPage() {
  const[credentials,setcredentials]=useState({email:"",password:""})
  let navigate=useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(JSON.stringify({email:credentials.email,password:credentials.password}));
    const response= await fetch("http://localhost:5000/api/loginuser",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})
    });
    const json= await response.json()
    console.log(json);

    if(!json.success){
      alert("Enter Valid Credentials");
    }
    if(json.success){
      localStorage.setItem('userEmail', credentials.email)
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"));
      if(json.role==="admin")
        navigate("/admin");
      else
         navigate("/");
    }
  };

  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }


  return (
    <div className="signup-container">
      <h1 className='Signup-h'>Login</h1>
       <form onSubmit={handleSubmit}>
        <div className="input-box">
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={onChange}
          placeholder="Email"
          required
        />
      </div>
      <div className="input-box">
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={onChange}
          placeholder="Password"
          required
        />
      </div>
      <button className="signup-button" onClick={handleSubmit}>
        Continue
      </button>
      </form><br/><br/>
      <p className='signup-p'>Don't have an account? <Link to="/signup">register</Link></p>
      <p className='signup-p'><Link to="/forgot-password">Forgot Password?</Link></p>

    </div>
  );
}
