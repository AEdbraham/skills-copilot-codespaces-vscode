// Create web server with express.router
const express = require('express');
const router = express.Router();

// GET /comments
router.get('/', (req, res) => {
    res.json({ message: 'GET /comments' });
});

// POST /comments
router.post('/', (req, res) => {
    res.json({ message: 'POST /comments' });
});

// GET /comments/:id
router.get('/:id', (req, res) => {
    res.json({ message: 'GET /comments/:id' });
});

// PUT /comments/:id
router.put('/:id', (req, res) => {
    res.json({ message: 'PUT /comments/:id' });
});

// DELETE /comments/:id
router.delete('/:id', (req, res) => {
    res.json({ message: 'DELETE /comments/:id' });
});

module.exports = router; // Export router


