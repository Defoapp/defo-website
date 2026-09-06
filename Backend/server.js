// 1. MUST BE AT THE VERY TOP
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Debug log to verify loading
console.log('MONGO_URI loaded:', process.env.MONGO_URI ? 'YES' : 'NO - STILL UNDEFINED');

const dbURI = process.env.MONGO_URI;

if (!dbURI) {
  console.error('ERROR: MONGO_URI is not defined in your .env file!');
  process.exit(1);
}

// 2. Connect to MongoDB
mongoose.connect(dbURI, {
  serverSelectionTimeoutMS: 5000,
})
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    if (err.message.includes('SSL') || err.message.includes('whitelist') || err.message.includes('alert number 80')) {
      console.error('>> NOTE: MongoDB Atlas rejected the connection. Your IP is likely not whitelisted in Atlas Network Access.');
    }
  });

// 3. Define Schema & Model
const ItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
}, { strict: false });

const Item = mongoose.model('Item', ItemSchema);

// Price Schema & Model - explicitly binds to 'prices' collection
const PriceSchema = new mongoose.Schema({
  _id: String,
  rate: String,
  valid: String,
  specs: [String],
}, { collection: 'prices', strict: false });

const Price = mongoose.model('Price', PriceSchema, 'prices');

// 4. API Routes
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
});

app.get('/api/prices', async (req, res) => {
  try {
    const prices = await Price.find();
    res.json(prices);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching prices', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});