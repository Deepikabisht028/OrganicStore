import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/payment.css'

export default function Success(){
  const navigate=useNavigate();
  useEffect(
    ()=>{
      alert("Payment Sucessfull");
      navigate("/");
    }
  )
  return (
   <></>
  );
}

