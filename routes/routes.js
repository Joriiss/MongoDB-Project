const express = require('express');
const User = require('../models/users');
const router = express.Router();

//Post Method
router.post('/users', async (req, res) => {})

//Get Method
router.get('/users', async (req, res) => {})

router.get('/users/:id', async (req, res) => {})

//Put Method
router.put('/users/:id', async (req, res) => {})

//Delete
router.delete('/users/:id', async (req, res) => {})

module.exports = router;