import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CSS/pswd.css';

export default function Rstpswd() {
    const [credentials, setcredentials] = useState({ password: "", cnfrmpassword: "" })
    const [msg, setmsg] = useState("");
    const { id, token } = useParams();
    let navigate = useNavigate()
    const {password,cnfrmpassword}=credentials;
    const validuser = async () => {
        const response = await fetch(`http:localhost:5000/api/resetpassword/${id}/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json()

        if (data.success) {
            console.log("user valid")
        } else {
            navigate("/forgot-password");
        }
    }


    useEffect(() => {
        validuser()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === cnfrmpassword) {
            console.log(JSON.stringify({ password: credentials.password }));
            const response = await fetch(`http://localhost:5000/api/resetpassword/${id}/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password: credentials.password })
            });
            const data = await response.json()

            if (data.success) {
                alert("Password Updated Sucessfully");
                navigate("/login");
            }
            else {
                alert("Link Expired");
                navigate("/forgot-password");
            }
        }
        else{
            setmsg(true);
            setcredentials({ password: "", cnfrmpassword: "" });
        }
    };

    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }


    return (
        <div className='pswd'>
        <div className="pswd-container">
            <h1 className='pswd-h'>Enter new password</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={onChange}
                        placeholder="New Password"
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        name="cnfrmpassword"
                        value={credentials.cnfrmpassword}
                        onChange={onChange}
                        placeholder="confirm Password"
                        required
                    />
                </div>
                {msg ? <p className='pswd-p'>Confirm Password should match Password</p> : " "}
                <button className="pswd-button" onClick={handleSubmit}>
                    Send
                </button>
            </form>
        </div>
        </div>
    );
}
