import { Link, useNavigate } from 'react-router-dom';
import React, { useState ,useEffect} from 'react';
import '../CSS/signup.css';

export default function AdminEdit({productdata}) {

    let navigate = useNavigate()
    const [product,setfi]=useState({title: productdata.title, price: productdata.price, category: productdata.category, imgsrc: productdata.imgsrc });
    console.log(productdata._id);
    const handleSubmit = async (e) => {
        console.log({...product});
        e.preventDefault();
        console.log(JSON.stringify({ title: product.title, price: product.price, category: product.category, imgsrc: product.imgsrc }));
        const response = await fetch(`http://localhost:5000/api/product/${productdata._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: product.title, price: product.price, category: product.category, imgsrc: product.imgsrc })
        });
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter Valid productdata");
        }
        else {
            navigate("/admin");
        }
    };

    const onChange = (event) => {
        setfi({ ...product, [event.target.name]: event.target.value })
    }

    return (
        <div className="signup-container">
            <h1 className='Signup-h'>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={onChange}
                        placeholder="title"
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        name="price"
                        value={product.price}
                        onChange={onChange}
                        placeholder="price"
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={onChange}
                        placeholder="category"
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        name="imgsrc"
                        value={product.imgsrc}
                        onChange={onChange}
                        placeholder="Image link"
                        required
                    />
                </div>
                <button className="signup-button" onClick={handleSubmit}>
                    Continue
                </button>
                <button className="signup-button"> <Link to="/admin">Cancel</Link></button>
            </form ><br /><br />
        </div>
    );
}; 
