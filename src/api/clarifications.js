/**
 * Clarifications API Endpoint
 * Test implementation mirroring PR #43 structure
 */

const express = require('express');
const router = express.Router();

// GET /api/clarifications
router.get('/', async (req, res) => {
  try {
    const clarifications = [
      {
        id: 1,
        type: 'feature_request',
        status: 'pending',
        content: 'Test clarification request'
      }
    ];

    res.json({
      success: true,
      data: clarifications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

module.exports = router;