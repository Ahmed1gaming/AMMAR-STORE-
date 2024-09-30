const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// الاتصال بقاعدة البيانات MongoDB
mongoose.connect('mongodb://localhost:27017/amazon_clone', { useNewUrlParser: true, useUnifiedTopology: true });

// تعريف نموذج المنتج
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String
});

const Product = mongoose.model('Product', productSchema);

// API للحصول على جميع المنتجات
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// API لإضافة منتج جديد
app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
});

// تشغيل الخادم
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
