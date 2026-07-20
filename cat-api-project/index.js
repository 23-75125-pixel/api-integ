const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS and middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = process.env.API_KEY;

// 1. GET ROUTE: Fetch random cats and display them
app.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/images/search?limit=6`, {
            headers: { 'x-api-key': API_KEY }
        });
        
        // Render the index.ejs page with the cat data
        res.render('index', { cats: response.data, error: null });
    } catch (error) {
        console.error('Error fetching data from Cat API:', error.message);
        res.render('index', { cats: [], error: 'Failed to load cute kittens. Please try again later.' });
    }
});

// 2. POST ROUTE: Submit a vote for a cat
app.post('/vote', async (req, res) => {
    const { image_id, sub_id, value } = req.body;

    try {
        // Requirement 4: API Integration (POST)
        const response = await axios.post(`${API_URL}/votes`, {
            image_id: image_id,
            sub_id: sub_id, // Unique identifier for the user session
            value: parseInt(value) // 1 for upvote, 0 for downvote
        }, {
            headers: { 
                'x-api-key': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        console.log('Vote submitted:', response.data);
        res.redirect('/'); // Refresh page to see new cats
    } catch (error) {
        console.error('Error posting vote:', error.response ? error.response.data : error.message);
        res.status(500).send('Error submitting your vote.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});