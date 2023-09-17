import React,{ useState ,useEffect} from "react";
import { Link } from "react-router-dom";
export default function AdminProducts({editproduct}){
   const [product,setfi]=useState([]);

   const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/product", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    if(response.success)
       setfi(response.docs);
    else
     alert("Data fetch failed");
    }

    useEffect(() => {
        loadData()
      }, [])

    return(
        <> 
         <div className="card-group">
          {
          product.length !== 0 ?
            product.map(filterItems => {
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
            : "No Such Data"
          }
        </div>
        </>
    );
}