import React, { useState } from 'react';
import Input from "../component/ui/input";  
import Button from "../component/ui/button";

const ProductForm = () => {
  // State igendeye kuri Product model irimo na Quantity, Category, n'Status
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    quantity: '',
    category: '',
    status: 'Available',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Product Data:', product);
    alert(`Product Added Successfully!\nName: ${product.name}\nQuantity: ${product.quantity}\nStatus: ${product.status}`);
  };

  return (
    /* Gradient background nshya ifite amabara meza */
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
      
      {/* Form Container */}
      <div className="w-full max-w-md rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur-md">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Add New Product
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Fill in all product details below.
          </p>
        </div>
        
        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <Input
            label="Product Name"
            name="name"
            type="text"
            value={product.name}
            onChange={handleChange}
            placeholder="e.g. Wireless Headphones"
            className="w-full"
          />

          <div className="flex gap-4">
            <div className="w-1/2">
              <Input
                label="Price ($)"
                name="price"
                type="number"
                value={product.price}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full"
              />
            </div>
            <div className="w-1/2">
              <Input
                label="Quantity"
                name="quantity"
                type="number"
                value={product.quantity}
                onChange={handleChange}
                placeholder="e.g. 10"
                className="w-full"
              />
            </div>
          </div>

          <Input
            label="Category"
            name="category"
            type="text"
            value={product.category}
            onChange={handleChange}
            placeholder="e.g. Electronics, Clothing..."
            className="w-full"
          />

          {/* Status Field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Status</label>
            <select
              name="status"
              value={product.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="Available">Available</option>
              <option value="Out of Stock">Out of Stock</option>
              <option value="Discontinued">Discontinued</option>
            </select>
          </div>

          <Input
            label="Description"
            name="description"
            type="text"
            value={product.description}
            onChange={handleChange}
            placeholder="Brief product summary..."
            className="w-full"
          />

          {/* Submit Button */}
          <div className="mt-4 flex justify-center">
            <Button type="submit">
              Submit Product
            </Button>
          </div>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          State management handled via React <code className="text-purple-600">useState</code>
        </p>
      </div>
    </div>
  );
};

export default ProductForm;