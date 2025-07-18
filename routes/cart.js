const express = require('express');
const router = express.Router();
const pool = require('../db');

// POST: เพิ่มสินค้าลงตะกร้า
router.post('/add', async (req, res) => {
  const { user_id, pet_id, quantity } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO cart_items (user_id, pet_id, quantity) VALUES ($1, $2, $3)',
      [user_id, pet_id, quantity]
    );
    res.json({ message: 'เพิ่มลงตะกร้าเรียบร้อย' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
