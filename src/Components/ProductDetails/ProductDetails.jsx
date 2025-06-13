import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
    const navigate = useNavigate(); 

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-info">
        <h2 className="product-title" >{product.title}</h2>
         <p><strong>Availability:</strong> {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
        <p className="brand"><strong>Brand:</strong> {product.brand}</p>
        <p className="category" ><strong>Category:</strong> {product.category}</p>
        <p className="rating"><strong>Rating:</strong> ⭐ {product.rating}</p>
       <p className="price">
        <span style={{ textDecoration: 'line-through', color: 'gray' }}>
           ₹{(product.price * 82).toFixed(2)}
           </span>{' '}
           <span style={{ fontWeight: 'bold', color: 'green' }}>
          ₹{((product.price - (product.price * product.discountPercentage / 100)) * 82).toFixed(2)}
            </span>{' '}
            <span style={{ color: 'red',fontSize: '10px' }}>
           {product.discountPercentage}% OFF
           </span>
      </p>

        <p><strong>Description:</strong> {product.description}</p>

    {product.category.toLowerCase() !== 'groceries' ? (
  <>
        <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
        <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
  </>
) : (
  <p style={{ color: 'red' }}><strong>Note:</strong> Groceries are not eligible for return and warranty.</p>
)}


        <button
        className="add-to-cart-btn"
        onClick={() => {
          addToCart(product);       
          navigate('/');            
        }}
      >
        Add to Cart
      </button>
      </div>
    </div>
  );
};

export default ProductDetail;
