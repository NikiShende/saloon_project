

// const db = require('../config/db');

// const women_service = (req, res) => {
//     const { service_name, price } = req.query;

//     db.query('SELECT * FROM women WHERE service_name = ? AND price = ?', [service_name, price], (err, result) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ message: 'Database error', error: err });
//         }

//         console.log(result);  // Log the result

//         if (result.length > 0) {
//             const women = result[0];

            
//             if (service_name=== women.service_name) {
//                 res.status(200).json({ message: 'Login successful', women: { service_name: women.service_name } });
//             } else {
//                 res.status(401).json({ error: 'Invalid service_name or price' });
//             }

//         } else {
//             res.status(401).json({ error: 'Invalid service_name or price' });
//         }
//     });
// };

// module.exports = {women_service };
const db = require('../config/db');

// Controller function for fetching and validating women's services
const women_service = (req, res) => {
    // Extract `service_name` and `price` from the request query parameters
    const { service_name, price } = req.query;

    // Query the database for matching records in the `women` table
    db.query('SELECT * FROM women WHERE service_name = ? AND price = ?', [service_name, price], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Database error', error: err });
        }

        // Check if any matching record was found
        if (result.length > 0) {
            const women = result[0]; // Get the first matching record

            // Respond with the matched data
            res.status(200).json({ message: 'Data matched successfully', women: { service_name: women.service_name, price: women.price } });
        } else {
            // No matching record was found
            res.status(401).json({ error: 'Invalid service_name or price' });
        }
    });
};

module.exports = { women_service };
