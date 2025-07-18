const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db'); // <-- เชื่อมต่อฐานข้อมูล
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get('/api/rabbits', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM rabbits ORDER BY rabbit_id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error fetching rabbits:', err.message); // <--- เพิ่ม log ชัดๆ
    res.status(500).json({ error: 'Failed to fetch rabbits' });
  }
});

/** ───── [2] GET: ดึงกระต่ายตาม id ───── */
app.get('/api/rabbits/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM rabbits WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Rabbit not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rabbit' });
  }
});
app.post('/api/rabbits', async (req, res) => {
  const {
    seller_id,
    name,
    breed,
    age,
    gender,
    price,
    description,
    image_url,
    status
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO rabbits (seller_id, name, breed, age, gender, price, description, image_url, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [seller_id, name, breed, age, gender, price, description, image_url, status]
    );

    res.status(201).json({ message: 'Rabbit added', rabbit: result.rows[0] });
  } catch (err) {
    console.error('❌ Failed to add rabbit:', err.message);
    res.status(500).json({ error: 'Failed to add rabbit' });
  }
});

/** ───── [4] PUT: แก้ไขกระต่ายตาม id ───── */
app.put('/api/rabbits/:id', async (req, res) => {
  const { id } = req.params;
  const {
    seller_id,
    name,
    breed,
    age,
    gender,
    price,
    description,
    image_url,
    status
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE rabbits 
       SET seller_id = $1, name = $2, breed = $3, age = $4, gender = $5, price = $6, description = $7, image_url = $8, status = $9
       WHERE rabbit_id = $10
       RETURNING *`,
      [seller_id, name, breed, age, gender, price, description, image_url, status, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Rabbit not found' });
    }

    res.json({ message: 'Rabbit updated', rabbit: result.rows[0] });
  } catch (err) {
    console.error('❌ Failed to update rabbit:', err.message);
    res.status(500).json({ error: 'Failed to update rabbit' });
  }
});

app.delete('/api/rabbits/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM rabbits WHERE rabbit_id = $1', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Rabbit not found' });
    }
    res.json({ message: 'Rabbit deleted' });
  } catch (err) {
    console.error('❌ Failed to delete rabbit:', err.message); // เพิ่ม log ดู error จริง
    res.status(500).json({ error: 'Failed to delete rabbit' });
  }
});

/** ───── Start server ───── */
app.listen(port, () => {
  console.log(`🐰 Server running at http://localhost:${port}`);
});
