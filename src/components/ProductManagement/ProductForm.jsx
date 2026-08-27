// import React from 'react';

const ProductForm = () => {
    const handleProductOnSubmit= e =>{
        e.preventDefault();

        const productName= e.target.name.value;
        const productPrice= e.target.price.value;
        const productQuantity= e.target.quantity.value;

        console.log(productName,productPrice,productQuantity)
    }
    return (
        <div>
            <h3>Add to Cart a Product</h3>
            <form onSubmit={handleProductOnSubmit}>
                <input type="text" name="name"  placeholder="Product Name" />
                <br />
                <input type="text" name="price"  placeholder="Product Price" />
                <br />
                <input type="text" name="quantity"  placeholder="Product Quantity" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;