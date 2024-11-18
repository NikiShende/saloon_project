// const db = require('../config/db');

// const massage = (req, res) => {
//     const { massage_id, price } = req.query;

//     db.query('SELECT * FROM massage WHERE massage_id = ? AND price = ?', [massage_id, price], (err, result) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ message: 'Database error', error: err });
//         }

//         console.log(result);  // Log the result

//         if (result.length > 0) {
//             const massageData = result[0];

//             // Send a success response with the found service
//             res.status(200).json({ message: 'Service found', massage: { massage_id: massageData.massage_id } });
//         } else {
//             res.status(401).json({ error: 'Invalid massage_id or price' });
//         }
//     });
// };

// module.exports = { massage };
const db = require('../config/db');

const massage = (req, res) => {
    const { massage_id, price } = req.query;

    // Log inputs for debugging
    console.log('Received massage_id:', massage_id);
    console.log('Received price:', price);

    // Ensure massage_id and price are valid numbers (if applicable)
    const massageIdNumber = parseInt(massage_id, 10);
    const priceNumber = parseFloat(price);

    if (isNaN(massageIdNumber) || isNaN(priceNumber)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers for massage_id and price.' });
    }

    db.query('SELECT * FROM massage WHERE massage_id = ? AND price = ?', [massageIdNumber, priceNumber], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Database error', error: err });
        }

        console.log('Query result:', result); // Log the result for debugging

        if (result.length > 0) {
            // Send a success response with the found service data
            res.status(200).json({ message: 'Service found', massage: result });
        } else {
            res.status(401).json({ error: 'Invalid massage_id or price' });
        }
    });
};

module.exports = { massage };
