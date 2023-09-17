import React, { useEffect, useState } from 'react';
import './CSS/1.css'; // Import your CSS file

export default function Juicy({addToCart}){

  const [veg, setveg] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/product/Juicy", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setveg(response);
  }

  useEffect(() => {
    loadData()
  }, [])


  return (
    <>
      <h2 className='item-heading'>Juicy Fruits</h2>
      <div className="body">
        <div className="card-group">
          {veg.length !== 0 ?
            veg.map(filterItems => {
                return (
                  <div key={filterItems._id}>
                    <div className="card">
                      <img className="card-img-top" src={filterItems.imgsrc} alt="Loading" />
                      <h4 className="class-title">{filterItems.title} </h4>
                      <div className="price"> <span>Rs.{filterItems.price}/kg</span></div>
                      {
                        (localStorage.getItem("authToken"))
                          ?
                          <button className="b" onClick={()=>addToCart(filterItems)}>Add to cart<i className="fa fa-shopping-cart"></i></button>
                      :<div></div>
                      }
                    </div>
                  </div>
                )

              })
            : "No Such Data"
          }
        </div>
      </div >
    </>
    );

}
