const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// // GET endpoint to retrieve all services
// app.get('/services', (req, res) => {
//     res.json(services);
// });

// // POST endpoint to create a new service
// app.post('/services', (req, res) => {
//     const { name, img, price } = req.body;
//     const newService = {
//         id: services.length + 1, // Simple ID generation
//         name,
//         img,
//         price
//     };
//     services.push(newService);
//     res.status(201).json(newService);
// });

// // PUT endpoint to update an existing service
// app.put('/services/:id', (req, res) => {
//     const { id } = req.params;
//     const { name, img, price } = req.body;
//     const service = services.find(s => s.id == id);
    
//     if (service) {
//         service.name = name;
//         service.img = img;
//         service.price = price;
//         res.json(service);
//     } else {
//         res.status(404).send('Service not found');
//     }
// });

// // DELETE endpoint to remove a service
// app.delete('/services/:id', (req, res) => {
//     const { id } = req.params;
//     services = services.filter(s => s.id != id);
//     res.status(204).send();
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});