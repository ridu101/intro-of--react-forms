// import React from 'react';

import { useState } from "react";

const ProductForm = ({ handleAddCartProduct }) => {
  const [error, setError] = useState("");
  const handleProductOnSubmit = (e) => {
    e.preventDefault();

    const productName = e.target.name.value;
    const productPrice = e.target.price.value;
    const productQuantity = e.target.quantity.value;

    // console.log(productName,productPrice,productQuantity)
    const newProduct = {
      productName,
      productPrice,
      productQuantity,
    };
   

    // validations

    if (productName.length === 0) {
      setError("Please Provide a Product Name");
      return
    }
    else if (productPrice.length === 0) {
        setError('Please Provide the price')
        return
    }
    else if ( productPrice < 0 ){
        setError('price cannot be negative')
        return
    }
    else if (productQuantity.length === 0){
        setError('Please Provide the Quantity')
        return
    }
    else {
        setError('')
        handleAddCartProduct(newProduct);
    }
  };
  return (
    <div>
      <h3>Add to Cart a Product</h3>
      <form onSubmit={handleProductOnSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="text" name="price" placeholder="Product Price" />
        <br />
        <input type="text" name="quantity" placeholder="Product Quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{color:'red'}}><small>{error}</small></p>
    </div>
  );
};

export default ProductForm;
