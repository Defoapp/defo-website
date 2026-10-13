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
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ message: 'Database connection not ready' });
  }
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
});

const FALLBACK_PRICES = [
  {
    _id: "1",
    rate: "49",
    valid: "month",
    specs: ["Ad-free entertainment", "HD Streaming", "Multiple devices"],
  },
  {
    _id: "2",
    rate: "129",
    valid: "3 months",
    specs: ["Ad-free entertainment", "Full HD Streaming", "All devices supported"],
  },
  {
    _id: "3",
    rate: "499",
    valid: "year",
    specs: ["VIP Access", "Ultra HD 4K", "Priority Customer Support"],
  },
];

app.get('/api/prices', async (req, res) => {
  if (mongoose.connection.readyState !== 1) {
    return res.json(FALLBACK_PRICES);
  }
  try {
    const prices = await Price.find();
    res.json(prices.length > 0 ? prices : FALLBACK_PRICES);
  } catch (error) {
    res.json(FALLBACK_PRICES);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});