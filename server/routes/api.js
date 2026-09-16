const express = require('express');
const router = express.Router();
const mockData = require('../data/mockDatabase.json');

// Get all destinations for the dropdown
router.get('/destinations', (req, res) => {
  const destinations = Object.keys(mockData.destinations);
  res.json(destinations);
});

// Get requirements based on nationality and destination
router.get('/requirements', (req, res) => {
  const { nationality, destination } = req.query;

  if (!destination) {
    return res.status(400).json({ error: 'Destination is required' });
  }

  const destinationData = mockData.destinations[destination];
  
  let requirements = destinationData;
  if (!destinationData) {
    requirements = {
      visaOptions: [
        {
          type: "Data Not Digitized",
          stayLimitation: "Detailed rules for this region are not yet digitized in our system. Please consult the official embassy website."
        }
      ]
    };
  }

  res.json({
    destination,
    requirements,
    globalRules: mockData.globalRules
  });
});

module.exports = router;
