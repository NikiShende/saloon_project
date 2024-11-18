


const db = require('../config/db');

const booking = (req, res) => {
    const { customer_id, service, price, date, time, payment_status } = req.query;
    

    // Input validation
    if (!customer_id || !service || !price || !date || !time || !payment_status) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Ensure price is a valid number
    if (isNaN(price) || price <= 0) {
        return res.status(400).json({ error: 'Price must be a valid positive number.' });
    }

    // SQL query to insert the booking into the database
    const query = 'INSERT INTO booking (customer_id, service, price, date, time, payment_status) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [customer_id, service, price, date, time, payment_status], (err, result) => {
        if (err) {
            console.error('Error inserting booking:', err);
            return res.status(500).json({ message: 'Database error', error: err.message });
        }

        res.status(201).json({ message: 'Booking created successfully', bookingId: result.insertId });
    });
};

module.exports = { booking };