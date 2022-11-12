function Checkout(props) {
  const { cartItems, onAdd, onRemove } = props;
  console.log(cartItems);
  return (
    <div className="px-5 flex flex-col bg-slate-100 h-screen">
      <h1 className="text-2xl font-bold my-2">Checkout</h1>
      <hr />

      <div className=" gap-2 flex flex-col p-2 w-1/2 self-center shadow-lg rounded-lg mt-10 bg-white">
        <div className=" flex flex-col">
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              return (
                <div className=" shadow-md rounded-md p-5 flex flex-col gap-5">
                  <div className="flex flex-col gap-3 items-center">
                    <h2 className="font-bold text-lg">{item.name}</h2>
                    <div className="flex gap-2">
                      <img src={item.image} alt={item.name} />
                      <p>{item.description}</p>
                    </div>
                    <span>${item.price * item.qty}</span>
                  </div>

                  <div className="flex justify-center items-center gap-5">
                    <div className="flex gap-1 items-center">
                      <span
                        className="cursor-pointer"
                        onClick={() => onRemove(item)}
                      >
                        -
                      </span>
                      <span>{item.qty}</span>
                      <span
                        className="cursor-pointer"
                        onClick={() => onAdd(item)}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="self-center text-slate-600">Cart is Empty</div>
          )}
        </div>
        <hr />
        <div className="self-center">
          $
          {cartItems.reduce(
            (previousValue, currentValue) =>
              previousValue + currentValue.price * currentValue.qty,
            0
          )}
        </div>
        <button className="border border-black w-max self-center py-1 px-3 rounded-md hover:text-white hover:bg-black ">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;
