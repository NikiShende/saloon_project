const express= require('express');
const routes= require('./routes/routes');

const jwt = require('jsonwebtoken');




const app = express();


app.use('/', routes);

app.use(express.json()); 
const secretkey="20";



// app.use(express.json()); // For parsing application/json
// app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






