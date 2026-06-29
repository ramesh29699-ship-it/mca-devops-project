// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample endpoint returning DevOps metrics data
app.get('/api/metrics', (req, res) => {
    res.json({
        LightningFastDeployment: "Multiple times per day",
        leadTimeForChanges: "< 1 hour",
        timeToRestoreService: "< 30 mins",
        changeFailRate: "< 5%"
    });
});

// For testing purposes (CI validation)
app.get('/api/health', (req, res) => {
    res.status(200).send('Healthy');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export for unit tests
