const db = require('../config/db');

// Controller function to search salons by name
const search_by_saloon = (req, res) => {
    const { salon_name } = req.query;

    // Validate the input
    if (!salon_name) {
        return res.status(400).json({ error: 'Salon name is required.' });
    }

    // SQL query to find salons matching the provided name (using wildcard for partial matches)
    const query = 'SELECT * FROM salons WHERE salon_name LIKE ?';
    const searchPattern = `%${salon_name}%`; // Adds wildcard characters for partial matching

    db.query(query, [searchPattern], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Database error', error: err.message });
        }

        // Check if results are found
        if (result.length > 0) {
            res.status(200).json({ message: 'Salons found', salons: result });
        } else {
            res.status(404).json({ message: 'No salons found matching the provided name' });
        }
    });
};

module.exports = { search_by_saloon };
