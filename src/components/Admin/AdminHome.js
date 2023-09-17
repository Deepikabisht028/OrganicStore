import '../CSS/Navbar.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AdminProducts from './AdminProducts';

export function AdminHome({editproduct}) {

  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [veg, setveg] = useState([]);

  const handlelogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  }
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/product", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    if(response.success)
      setveg(response.docs);
    else
    {  alert("Data fetch Failed");
       navigate("/");
    }
  }
  useEffect(() => {
    if (search.length !== 0)
      loadData()
    else {
      setveg([]);
    }
  }, [search])


  return (
    <>

      <div className='Navbar-css'><header style={{ margin: "0" }}>
        <div className="App-navbar">
          <div className="logo">Organic store</div>
          <div className="search">
            <div>
              <input type="search" placeholder="Search..." value={search} onChange={(e) => { setSearch(e.target.value) }} />
            </div>
          </div>
          <ul className="App-nav-link" style={{ margin: "0px 0px" }}>
            <li><Link to="./">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/admin/add-product">Add Product</Link></li>
            <li onClick={handlelogout}>Logout</li>
          </ul>
        </div>
      </header>
      </div>
      {search.length?

        <div className="body">
        <div className="card-group">
          {veg.length !== 0 ?
            veg.filter((item) => (item.category.toLowerCase().includes(search.toLocaleLowerCase())) ||(item.title.toLowerCase().includes(search.toLocaleLowerCase())))
              .map(filterItems => {
                return (
                  <div key={filterItems._id}>
                    <div className="card">
                      <img className="card-img-top" src={filterItems.imgsrc} alt="Loading" />
                      <h4 className="class-title">{filterItems.title} </h4>
                      <div className="price"> <span>Rs.{filterItems.price}/kg</span></div>
                      <button className="b" onClick={()=>editproduct(filterItems)}>
                        <Link to="/admin/product-edit">Edit</Link>
                      </button>
                    </div>
                  </div>
                )

              })
            : <div>Item Not Found</div>
          }
        </div>
        </div>

      :
      <AdminProducts editproduct={editproduct}/>
      }
    </>
  );
}