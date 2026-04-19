const express = requir('express');
const SSLCommerzPayment = require('sslcommerz-lts');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false; 

// THIS IS THE "/order" ROUTE WHERE YOU PUT YOUR CODE
app.post("/order", async (req, res) => {
    const order = req.body;
    const transactionId = `TRANS_${Date.now()}`;

    const data = {
        total_amount: order.amount,
        currency: 'BDT',
        tran_id: transactionId,
        success_url: 'http://localhost:5000/payment/success',
        fail_url: 'http://localhost:5000/payment/fail',
        cancel_url: 'http://localhost:5000/payment/cancel',
        ipn_url: 'http://localhost:5000/ipn',
        shipping_method: 'Courier',
        product_name: 'Furniture',
        product_category: 'Home Decor',
        product_profile: 'general',
        cus_name: order.firstName,
        cus_email: order.email,
        cus_add1: order.address,
        cus_phone: order.phone,
        cus_city: 'Dhaka',
        cus_country: 'Bangladesh',
        ship_name: order.firstName,
        ship_add1: order.address,
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };

    // --- YOUR CODE STARTS HERE ---
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

    sslcz.init(data).then(apiResponse => {
        // This 'apiResponse' is the object returned by SSLCommerz
        // The link you need is stored in 'GatewayPageURL'
        let GatewayPageURL = apiResponse.GatewayPageURL;

        // Send this link back to your React frontend
        res.send({ url: GatewayPageURL });
        
        console.log('Redirecting to: ', GatewayPageURL);
    }).catch(error => {
        console.error("SSLCommerz Init Error:", error);
        res.status(500).send({ message: "Failed to create payment session" });
    });
    // --- YOUR CODE ENDS HERE ---
});

// SUCCESS/FAIL ROUTES (Keep these so users can return to your site)
app.post("/payment/success", (req, res) => {
    res.redirect("http://localhost:5173/order-success");
});

app.post("/payment/fail", (req, res) => {
    res.redirect("http://localhost:5173/checkout");
});

app.listen(5000, () => console.log("Server running on port 5000"));