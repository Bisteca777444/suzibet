const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor rodando em http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

