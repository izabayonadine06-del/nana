import { useState } from "react";
import Navbar from '../component/navbar.jsx';
import Footer from '../component/footer.jsx';

function Product() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);
    alert("Product Saved Successfully");
  };

  return (
    <div className="product-page">

      <div className="product-card">

        <h1>🛍 DEV SALE</h1>
        <p>Create New Product</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="4"
            onChange={handleChange}
          ></textarea>

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
          />

          <select
            name="category"
            onChange={handleChange}
          >
            <option>Choose Category</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Phone</option>
            <option>Laptop</option>
            <option>Accessories</option>
          </select>

          <select
            name="status"
            onChange={handleChange}
          >
            <option>Available</option>
            <option>Out of Stock</option>
          </select>

          <button>
            Save Product
          </button>

        </form>

      </div>

    </div>
  );
}

export default Product;