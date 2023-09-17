import React, { useState } from 'react';
import './CSS/pswd.css';

export default function Frgtpswd() {
  const[email,setemail]=useState("");
  const [msg,setmsg]=useState("");
 

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(JSON.stringify({email}));
    const response= await fetch("http://localhost:5000/api/forgotpassword",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email})
    });
    const json= await response.json()
    console.log(json);

    if(json.success){
      setemail("");
      setmsg(true);
    }
    else
      alert("Invalid Email!!");
  };



  return (
    <div className='pswd'>
    <div className="pswd-container">
      <h1 className='pswd-h'>Enter email</h1>
       {msg ? <p className='pswd-ptrue'>Password reset link sent sucessfully...</p>:" " }
       <form onSubmit={handleSubmit}>
        <div className="input-box">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <button className="pswd-button" onClick={handleSubmit}>
        Send
      </button>
      </form>
    </div>
    </div>
  );
}
