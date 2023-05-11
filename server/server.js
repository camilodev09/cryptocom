const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

const apiEndpoint = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency';

app.get('/api/listings/latest', async (req, res) => {
  try {
    const { start, limit, convert } = req.query;
    const response = await axios.get(`${apiEndpoint}/listings/latest`, {
      params: { start, limit, convert },
      headers: { 'X-CMC_PRO_API_KEY': 'd9c79f73-f217-4ac5-a042-79d7b69f4c0f' }, // Reemplaza con tu propia clave API
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
