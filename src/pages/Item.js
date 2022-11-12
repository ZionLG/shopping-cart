import { useParams } from "react-router-dom";

function Item(props) {
  const { id } = useParams();
  const { cartItems, products, onAdd, onRemove } = props;
  const product = products.find((product) => product.id === Number(id));
  const item = cartItems.find((item) => item.id === Number(id));

  console.log(product);
  return (
    <div className=" shadow-md rounded-md p-5 flex flex-col gap-5">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="font-bold text-lg">{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <span>${product.price}</span>
      </div>

      <div className="flex justify-center items-center gap-5">
        {item ? (
          <div className="flex gap-1 items-center">
            <span className="cursor-pointer" onClick={() => onRemove(item)}>
              -
            </span>
            <span>{item.qty}</span>
            <span className="cursor-pointer" onClick={() => onAdd(item)}>
              +
            </span>
          </div>
        ) : (
          <button
            onClick={() => onAdd(product)}
            className="border-2 rounded-lg shadow-md p-2"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Item;
