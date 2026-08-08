import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const cartitems = useSelector((state) => {
    return state.cart.items;
  });
  const distinctcount = cartitems.length
  return (
    <div>
      <div className="flex justify-between h-20  items-center px-10 border-b-6">
        <h1 className="text-4xl font-bold">
          <Link to="/">Shopee</Link>
        </h1>
        <Link to="/cart">
          <div>
            {distinctcount}
          </div>
          <img
            className="size-10"
            src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/cart.svg"
            alt="cart-icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
