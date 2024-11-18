

const db = require('../config/db');

const service = (req, res) => {
    const { service_name, price } = req.query;

    db.query('SELECT * FROM services WHERE service_name = ? AND price = ?', [service_name, price], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Database error', error: err });
        }

        console.log(result);  // Log the result

        if (result.length > 0) {
            const services = result[0];

            
            if (service_name=== services.service_name) {
                res.status(200).json({ message: 'Login successful', user: { service_name: services.service_name } });
            } else {
                res.status(401).json({ error: 'Invalid service_name or price' });
            }
        } else {
            res.status(401).json({ error: 'Invalid service_name or price' });
        }
    });
};

module.exports = {service };
