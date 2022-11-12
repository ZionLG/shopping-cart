import Product from "../components/Product";
function Store(props) {
  const { cartItems, products, onAdd, onRemove } = props;

  return (
    <div className="px-5">
      <h1 className="text-2xl font-bold my-2">Store</h1>
      <hr />
      <div className="flex p-6 flex-wrap gap-6">
        {products.map((productData) => {
          return (
            <Product
              key={productData.id}
              product={productData}
              onAdd={onAdd}
              onRemove={onRemove}
              item={cartItems.find((item) => item.id === productData.id)}
            ></Product>
          );
        })}
      </div>
    </div>
  );
}

export default Store;
