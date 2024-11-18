// const db = require('../config/db');

// const kid_services = (req, res) => {
//     const { service_id, price } = req.query;

//     db.query('SELECT * FROM kids WHERE service_id = ? AND price = ?', [service_id, price], (err, result) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ message: 'Database error', error: err });
//         }

//         console.log(result);  // Log the result

//         if (result.length > 0) {
//             const kids = result[0];

//             // Send a success response with the found service
//             res.status(200).json({ message: 'Service found', kids: { service_id: kids.service_id } });
//         } else {
//             res.status(401).json({ error: 'Invalid service_id or price' });
//         }
//     });
// };

// module.exports = { kid_services };
const db = require('../config/db');

const kid_services = (req, res) => {
    const { service_id, price } = req.query;

    db.query('SELECT * FROM kids WHERE service_id = ? AND price = ?', [service_id, price], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Database error', error: err });
        }

        console.log('Query result:', result);  // Log the result

        if (result.length > 0) {
            // Send all matching records as a success response
            res.status(200).json({ message: 'Service found', kids: result });
        } else {
            res.status(401).json({ error: 'Invalid service_id or price' });
        }
    });
};

module.exports = { kid_services };
