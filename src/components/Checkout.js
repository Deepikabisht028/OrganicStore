import './CSS/stripe.css';
import { loadStripe } from '@stripe/stripe-js';


// payment integration
export default function Checkout() {
    
    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51Nmyp9SHhNXATpscoq02S2eBflio6d4xp2bAedQIhn4nyXqm1AATQRIB33qFbscBA3ONqg2KYV4m5n7iKtVEUKzi00rhZQsLDG");
        const headers = {
            "Content-Type": "application/json"
        }
        const response = await fetch("http://localhost:5000/api/create-checkout-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({name:"Apple",price:30,qty:2})
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
        <button type="button" onClick={makePayment}>Checkout</button>
    );
}
