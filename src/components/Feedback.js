import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/feedback.css';
export function Feedback(){
    const[data,setdata]=useState({name:"",email:"",msg:""})
    let navigate=useNavigate();
    const handleSubmit=async(e)=>{ 
        e.preventDefault();
            console.log(JSON.stringify({name:data.name,email:data.email,msg:data.msg}));
            const response= await fetch("http://localhost:5000/api/feedback",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name:data.name,email:data.email,msg:data.msg})
            });
            const json= await response.json()
            console.log(json);
        
            if(!json.success){
            alert("Enter Valid data");
            }
            else{
            alert("Thank you for feedback");
            navigate("/");
            }
   }

   const onChange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
   }

    return(
    <div className="feed">
    <div className="feed-container">
       <img src={require('./photos/logo.png')}/>
       <p>Feedback Form</p>
       <form onSubmit={handleSubmit}>
            <input 
                type="text" id="name" value={data.name}
                name="name" required="" 
                size="40" placeholder="Enter name" 
                className='Feed-form' onChange={onChange}
            /><br/>
            <input 
                type="email" id="email" value={data.email}
                name="email" required="" 
                size="40" placeholder="Enter e-mail" 
                className='Feed-form' onChange={onChange}
            /><br/>
            <textarea 
                rows="10" cols="40" value={data.msg}
                id="msg" name="msg" 
                placeholder="Message..." 
                className='Feed-form2'  onChange={onChange}
            ></textarea><br/>
            <button type="submit" value="Submit" width="200" className="feed-btn">SEND MESSAGE</button>
        </form>
    </div>
    </div>
    );
}