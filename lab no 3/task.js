
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/productDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));


const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true }
});

const Product = mongoose.model('Product', productSchema);




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


async function updateProduct(name, newPrice, newCategory) {
  const updatedProduct = await Product.findOneAndUpdate(
    { name },
    { price: newPrice, category: newCategory },
    { new: true } 
  );
  console.log('Updated Product:', updatedProduct);
}

async function deleteProduct(name) {
  const deletedProduct = await Product.findOneAndDelete({ name });
  console.log('Deleted Product:', deletedProduct);
}


async function findProductsByCategory(category) {
  const products = await Product.find({ category });
  console.log(`Products in category "${category}":`, products);
}


async function main() {
  try {
 
    await createProduct('Laptop', 1200, 'Electronics');
    await createProduct('Chair', 150, 'Furniture');
    await createProduct('Headphones', 100, 'Electronics');

   
    await getAllProducts();

    
    await updateProduct('Laptop', 1100, 'Computers');

   
    await findProductsByCategory('Electronics');

    
    await deleteProduct('Chair');

    
    await getAllProducts();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    mongoose.connection.close();
  }
}

main();