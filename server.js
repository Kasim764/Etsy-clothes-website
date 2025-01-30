const express = require('express');
const stripe = require('stripe')('your-secret-key-here');
const app = express();

app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: req.body.items.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100,
            },
            quantity: 1,
        })),
        mode: 'payment',
        success_url: 'https://yourwebsite.com/success',
        cancel_url: 'https://yourwebsite.com/cancel',
    });

    res.json({ id: session.id });
});

app.listen(3000, () => console.log('Server running on port 3000'));
