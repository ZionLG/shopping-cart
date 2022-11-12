import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Nav(props) {
  return (
    <nav className="p-5 flex justify-between items-center shadow-md">
      <div>
        <img src="./assets/logo.jpeg" alt="" />
        <span>Canadian Brands</span>
      </div>
      <ul className="flex gap-5 justify-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Link to="/checkout" className="flex gap-1 items-center">
        {props.cartCount !== 0 && (
          <div className="p-1 bg-red-500 rounded-lg text-white">
            {props.cartCount}
          </div>
        )}
        <AiOutlineShoppingCart size={20} />
      </Link>
    </nav>
  );
}

export default Nav;
