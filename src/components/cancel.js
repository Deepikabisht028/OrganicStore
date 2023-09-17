import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/payment.css'

export function Cancel(){
  const navigate=useNavigate();
  useEffect(
    ()=>{
      alert("Error Occured Payment Unsucessfull");
      navigate("/");
    }
  )
  return (
   <></>
  );
}