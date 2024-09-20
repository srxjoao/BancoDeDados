const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'seu_usuario',
  host: 'localhost',
  database: 'agenda_db',
  password: 'sua_senha',
  port: 5432,
});

app.get('/agenda', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM agenda');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
