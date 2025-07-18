const pool = require('./db');  // เรียกไฟล์ db.js ที่อยู่โฟลเดอร์เดียวกัน

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connected to PostgreSQL at:', res.rows[0].now);
  } catch (err) {
    console.error('Failed to connect to PostgreSQL:', err.message);
  } finally {
    await pool.end();
  }
}

testConnection();
