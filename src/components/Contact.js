import React, { useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './CSS/contact.css';
export function Contact(){

    const[data,setdata]=useState({name:"",email:"",msg:""})
    let navigate=useNavigate();
    const handleSubmit=async(e)=>{ 
        e.preventDefault();
            console.log(JSON.stringify({name:data.name,email:data.email,msg:data.msg}));
            const response= await fetch("http://localhost:5000/api/contact-us",{
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
            alert("Sent");
            navigate("/");
            }
   }

   const onChange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
   }

    return(
        <div className="contact">
        <header>
        <div class="navbar">
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/login" >Login</Link>
        </div>
      </header>
        <div class="heading">Contact Us</div>
        <div class="row">
            <div class="contact-column">
                    <p>
                        <i class="fas fa-home mr-3" style={{color: "#750b0b"}}></i>
                        &nbsp; Organic Store, Swami vivekanand marg, Shyampur, Rishikesh-249201
                    </p>
                    <p>
                        <i class="fas fa-envelope mr-3" style={{color: "#750b0b"}}></i>
                        &nbsp;organicstore@gmail.com
                    </p>
                    <p>
                        <i class="fas fa-phone mr-3" style={{color: "#750b0b"}}></i>
                         &nbsp;+ 91 7783673733
                    </p><br/>
                    <div class="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.250779029635!2d78.23960957508676!3d30.05834531791282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093ef731a9ca9f%3A0x681d1da7cdc7d9b7!2sSwami%20Vivekanand%20Marg%2C%20Guljar%20Farm%2C%20Rishikesh%2C%20Uttarakhand%20249204!5e0!3m2!1sen!2sin!4v1692103184019!5m2!1sen!2sin" width="200" height="600" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div class="contact-column">
                    <div class="container">
                        <form onSubmit={handleSubmit}>
                            <input className="contact-input" type="text" id="name" name="name" required="" size="30" placeholder="Name" value={data.name} onChange={onChange}/><br/>
                            <input className="contact-input" type="email" id="mail" name="email" required="" size="30" placeholder="E-mail"  value={data.email} onChange={onChange}/><br/>
                            <textarea className="contact-txtar" rows="7" cols="32" id="msg" name="msg" placeholder="Message..."  value={data.msg} onChange={onChange}></textarea><br/>
                            <button type="submit" value="Submit" width="200" className='contact-btn'>SUBMIT</button>
                        </form>   
                    </div>
            </div>
        </div> 
        </div>
    );
}