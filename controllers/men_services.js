
// const db = require('../config/db');

// const men_services = (req, res) => {
//     const { service_id, price } = req.query;

//     db.query('SELECT * FROM men WHERE service_id = ? AND price = ?', [service_id, price], (err, result) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ message: 'Database error', error: err });
//         }

//         console.log(result);  // Log the result

//         if (result.length > 0) {
//             const men = result[0];

            
//             if (service_id=== men.service_id) {
//                 res.status(200).json({ message: 'Data matched successfully', men: { service_id: men.service_id } });
//             } else {
//                 res.status(401).json({ error: 'Invalid service_id or price' });
//             }
//         } else {
//             res.status(401).json({ error: 'Invalid service_id or price' });
//         }
//     });
// };

// module.exports = {men_services };



const db = require('../config/db');

const men_services = (req, res) => {
    const { service_id, price } = req.query;
    const serviceIdNumber = parseInt(service_id, 10);
    const priceNumber = parseFloat(price);

    console.log('Received service_id:', serviceIdNumber);
    console.log('Received price:', priceNumber);

    db.query('SELECT * FROM men WHERE service_id = ? AND price = ?', [serviceIdNumber, priceNumber], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Database error', error: err });
        }

        console.log('Query result:', result);

        if (result.length > 0) {
            res.status(200).json({ message: 'Data matched successfully', men: result[0] });
        } else {
            res.status(401).json({ error: 'Invalid service_id or price' });
        }
    });
};

module.exports = { men_services };
