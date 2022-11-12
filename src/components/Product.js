import { useNavigate } from "react-router-dom";

function About(props) {
  const navigate = useNavigate();
  const { item, product, onAdd, onRemove } = props;

  return (
    <div className=" shadow-md rounded-md p-5 flex flex-col gap-5">
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/store/${product.id}`)}
      >
        <h2 className="font-bold text-lg">{product.name}</h2>
        <div className="flex gap-5">
          <div>
            <img src={product.image} alt={product.name} />
          </div>
          <div className="flex flex-col gap-5">
            <p className="w-48">{product.description}</p>
            <span>${product.price}</span>
          </div>
        </div>
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

export default About;
