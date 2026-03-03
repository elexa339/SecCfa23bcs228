// task.js
const mongoose = require('mongoose');

// 1️⃣ Connect to MongoDB (updated for modern Mongoose)
mongoose.connect('mongodb://localhost:27017/productDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// 2️⃣ Define Product Schema and Model
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true }
});

const Product = mongoose.model('Product', productSchema);

// 3️⃣ CRUD Functions

// Create Product
async function createProduct(name, price, category, inStock = true) {
  const product = new Product({ name, price, category, inStock });
  await product.save();
  console.log('Product created:', product);
}

// Read All Products
async function getAllProducts() {
  const products = await Product.find();
  console.log('All Products:', products);
}

// Update Product
async function updateProduct(name, newPrice, newCategory) {
  const updatedProduct = await Product.findOneAndUpdate(
    { name },
    { price: newPrice, category: newCategory },
    { new: true } // return updated document
  );
  console.log('Updated Product:', updatedProduct);
}

// Delete Product
async function deleteProduct(name) {
  const deletedProduct = await Product.findOneAndDelete({ name });
  console.log('Deleted Product:', deletedProduct);
}

// Find Products by Category
async function findProductsByCategory(category) {
  const products = await Product.find({ category });
  console.log(`Products in category "${category}":`, products);
}

// 4️⃣ Example Usage
async function main() {
  try {
    // Create products
    await createProduct('Laptop', 1200, 'Electronics');
    await createProduct('Chair', 150, 'Furniture');
    await createProduct('Headphones', 100, 'Electronics');

    // Read all products
    await getAllProducts();

    // Update a product
    await updateProduct('Laptop', 1100, 'Computers');

    // Find products by category
    await findProductsByCategory('Electronics');

    // Delete a product
    await deleteProduct('Chair');

    // Read all products again to confirm deletion
    await getAllProducts();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    mongoose.connection.close();
  }
}

main();