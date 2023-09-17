const express = require('express')
const router = express.Router()
const STRIPE_SECRET_KEY = "sk_test_51Nmyp9SHhNXATpscdI6OQcncd2XCS0yTBm1r8pQjrASsK1oZKoaiBZv54kGkAxJSiewYdxVO0ngFRxsQTdQo7ErC00lCI1ZyEh";
const stripe = require("stripe")(STRIPE_SECRET_KEY);


router.post("/create-checkout-session", async (req, res) => {
    const {products} = req.body;
    const lineItems = products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.title,
            },
            unit_amount:product.price * 100,
        },
        quantity:product.quantity
    }));

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id })
})

module.exports = router;