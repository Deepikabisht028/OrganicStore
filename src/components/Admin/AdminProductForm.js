import { Link,useNavigate } from 'react-router-dom';
import React ,{useState}from 'react';
import '../CSS/signup.css';

export default function AdminProductForm() {
  
const[prodata,setprodata]=useState({title:"",price:"",category:"",imgsrc:""})
let navigate=useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(JSON.stringify({title:prodata.title,price:prodata.price,category:prodata.category,imgsrc:prodata.imgsrc}));
    const response= await fetch("http://localhost:5000/api/product",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({title:prodata.title,price:prodata.price,category:prodata.category,imgsrc:prodata.imgsrc})
    });
    const json= await response.json()
    console.log(json);

    if(!json.success){
      alert("Enter Valid prodata");
    }
    else{
      navigate("/admin");
    }
  };

  const onChange=(event)=>{
    setprodata({...prodata,[event.target.name]:event.target.value})
  }

  return (
    <div className="signup-container">
      <h1 className='Signup-h'>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
        <input
          type="text"
          name="title"
          value={prodata.title}
          onChange={onChange}
          placeholder="title"
          required
        />
      </div>
      <div className="input-box">
        <input
          type="text"
          name="price"
          value={prodata.price}
          onChange={onChange}
          placeholder="price"
          required
        />
      </div>
      <div className="input-box">
        <input
          type="text"
          name="category"
          value={prodata.category}
          onChange={onChange}
          placeholder="category"
          required
        />
      </div>
      <div className="input-box">
        <input
          type="text"
          name="imgsrc"
          value={prodata.imgsrc}
          onChange={onChange}
          placeholder="Image link"
          required
        />
      </div>
      <button className="signup-button" onClick={handleSubmit}>
        Continue
      </button>
      <button className="signup-button"> <Link to="/admin">Cancel</Link></button>
      </form ><br/><br/>
    </div>
  );
}; 
