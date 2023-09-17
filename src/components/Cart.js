import React from 'react';
import './CSS/1.css'; // Import your CSS file
import { loadStripe } from '@stripe/stripe-js';

export function Checkout({ cart, total }) {
    const body = {
        products:cart
    }
    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51Nmyp9SHhNXATpscoq02S2eBflio6d4xp2bAedQIhn4nyXqm1AATQRIB33qFbscBA3ONqg2KYV4m5n7iKtVEUKzi00rhZQsLDG");
        const headers = {
            "Content-Type": "application/json"
        }
        const response = await fetch("http://localhost:5000/api/create-checkout-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId: session.id
        });

        if (result.error) {
            console.log(result.error);
        }
    }

    return (
        <div>
            <h2>Checkout</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item._id}>
                        {item.title} - ${item.price.toFixed(2)} x {item.quantity}
                    </li>
                ))}
            </ul>
            <p>Total: ${total.toFixed(2)}</p>
            <button type="button" onClick={()=>makePayment(total.toFixed(2))}>Place Order</button>
        </div>);
}

function Cart({ cart, updateQuantity, removeFromCart, total }) {
    return (
        <div>
            {cart.length!==0 ?<>
            <h2 className='item-heading'>Your Cart</h2>
            <div className="body">
                <div className="card-group">
                    {cart.map((item) => (
                        <div key={item._id}>
                            <div className="card">
                                <img className="card-img-top" src={item.imgsrc} alt="loading" />
                                {item.title} - ${item.price.toFixed(2)} x {item.quantity}
                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                                </div>
                        ))}
                </div>
             </div>
             <Checkout cart={cart} total={total} />
             </>:<h2 className='item-heading'>Your Cart Is Empty</h2>}

        </div >
     );
}
export default Cart;