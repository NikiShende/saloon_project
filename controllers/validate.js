




// const db = require('../config/db');



// const login = (req, res) => {
//     const { user_name, password } = req.query;

//     db.query('SELECT * FROM user WHERE user_name = ? AND password = ?', [user_name, password], (err, result) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ message: 'Database error', error: err });
//         }

//         console.log(result);  // Log the result

//         if (result.length > 0) {
//             const user = result[0];

            
//             if (password === user.password) {
//                 res.status(200).json({ message: 'Login successful', user: { user_name: user.user_name } });
//             } else {
//                 res.status(401).json({ error: 'Invalid username or password' });
//             }
//         } else {
//             res.status(401).json({ error: 'Invalid username or password' });
//         }
//     });
//     Jwt.sign({user},secretkey,{expiresIn:'300s'},(err,token)=>{
//         resp.json({token})
//     });
// };

// module.exports = { login };


require('dotenv').config();

const jwt = require('jsonwebtoken');  // Ensure the jwt module is required
const db = require('../config/db');


// Secret key for JWT signing (store this securely in environment variables)
const secretkey = 'process.env.SECRET_KEY'; 

const login = (req, res) => {
    const { user_name, password } = req.query;

    // Check if user_name and password are provided
   
    // Query the database to check user credentials
    db.query('SELECT * FROM signup WHERE user_name = ? AND password = ?', [user_name, password], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Database error', error: err });
        }

        console.log(result);  // Log the result for debugging

        if (result.length > 0) {
            const signup = result[0];

            // Check if the provided password matches the one in the database
            if (password === signup.password) {
                // Generate JWT token after successful login
                const token = jwt.sign({ user_name: signup.user_name }, secretkey, { expiresIn: '300s' });
                
                // Send the token in the response
                res.status(200).json({ message: 'Login successful', token });
            } else {
                res.status(401).json({ error: 'Invalid username or password' });
            }
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    });
};

module.exports = { login };
