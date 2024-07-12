import React, { useState } from 'react';
import '../styles/addproductpage.css'

const AddProductPage = () => {
    const [product, setProduct] = useState({
        product_name: '',
        description: '',
        mrp: '',
        img: '',
        category: ''
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8084/add-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            const result = await response.json();
            console.log('Product added:', result);
           
        } catch (error) {
            console.error('Error adding product:', error);
            
        }
    }

    return (
        <div className="add-product-container">
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit} className="product-form">
                <div className="form-group">
                    <label>Product Name</label>
                    <input type='text' name='product_name' value={product.product_name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Product Description</label>
                    <input type='text' name='description' value={product.description} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>MRP</label>
                    <input type='text' name='mrp' value={product.mrp} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Image URL</label>
                    <input type='text' name='img' value={product.img} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input type='text' name='category' value={product.category} onChange={handleInputChange} />
                </div>
                <button type='submit' className="submit-button">Add Product</button>
            </form>
        </div>
    );
}

export default AddProductPage;
