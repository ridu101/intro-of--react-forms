const ProductTable = ({ products }) => {
  return (
    <div>
      <h3>Product: {products.length}</h3>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td>{product.productQuantity}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;