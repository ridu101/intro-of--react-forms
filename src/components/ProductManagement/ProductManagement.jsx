// import React from 'react';

import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";


const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  const handleAddCartProduct = (newProduct) => {
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  };

  return (
    <div>
      <ProductForm handleAddCartProduct={handleAddCartProduct}></ProductForm>
      <ProductTable products={products}></ProductTable>
   
    </div>
  );
};

export default ProductManagement;
