const express = require('express');
const bodyParser = require('body-parser');
const Profile = require('./models/profile.js'); // Import the model

const app = express();
app.use(bodyParser.json());

// Sync database
Profile.sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch((err) => console.error('Failed to sync database:', err));

// POST API to add profile data
app.post('/api/profiles', async (req, res) => {
    try {
        const { name, location, about, bio, followerCount, connectionCount } = req.body;

        // Add data to the database
        const newProfile = await Profile.create({
            name,
            location,
            about,
            bio,
            followerCount,
            connectionCount
        });

        res.status(201).json(newProfile);
    } catch (error) {
        console.error('Error adding profile:', error);
        res.status(500).json({ error: 'Failed to add profile' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
