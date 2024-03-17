// backend.js

const express = require('express');
const app = express();
const cors = require('cors');

// Middleware for handling CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Endpoint to serve data
app.get('/api', (req, res) => {
    // Your code to fetch data from the database or any other source
    // For this example, let's just send back dummy data
    const data = { message: 'Hello from backend!' };
    
    // Send the data as JSON response
    res.json(data);
});

// Start the server
const PORT = process.env.PORT || 5000; // Use a port of your choice
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
