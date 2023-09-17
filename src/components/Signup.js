import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './CSS/signup.css';

function SignupPage() {

  const [msg, setmsg] = useState("");
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cnfrmpassword: "", geolocation: "" })
  let navigate = useNavigate()
  const { password, cnfrmpassword } = credentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === cnfrmpassword) {
      console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation }));
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
      });
      const json = await response.json()
      console.log(json);

      if (!json.success) {
        alert("Enter Valid Credentials");
      }
      else {
        localStorage.setItem('userEmail', credentials.email);
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
    }
    else {
      setmsg(true);
      setcredentials({ name: "", email: "", password: "", cnfrmpassword: "", geolocation: "" });
    }
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div className="signup-container">
      <h1 className='Signup-h'>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="name"
            value={credentials.name}
            onChange={onChange}
            placeholder="Name"
            required
          />
        </div>
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
        <div className="input-box">
          <input
            type="password"
            name="cnfrmpassword"
            value={credentials.cnfrmpassword}
            onChange={onChange}
            placeholder="Confirm Password"
            required
          />
        </div>
        {msg ? <p className='pswd-p'>Confirm Password should match Password</p> : " "}
        <div className="input-box">
          <input
            type="text"
            name="geolocation"
            value={credentials.geolocation}
            onChange={onChange}
            placeholder="address"
            required
          />
        </div>
        <button className="signup-button" onClick={handleSubmit}>
          Continue
        </button>
      </form ><br /><br />
      <p className='signup-p'>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}


export default SignupPage;
