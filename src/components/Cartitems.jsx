import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearcart,
  decreasequantity,
  increasequantity,
  removefromcart,
} from "../slices/Cartslice";

const Cartitems = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => {
    return state.cart.items;
  });
  return (
    <div>
      <div>
        <h1 className="m-7 text-3xl font-bold">Items in your Cart</h1>
        <div className="flex flex-col gap-5">
          {cartitems.map((item, idx) => {
            return (
              <div className="flex  justify-between border rounded mx-4 gap-10">
                <div className="flex  gap-3 w-150 p-7 ">
                  <img className="size-30" src={item.image} alt="" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <div className="flex flex-row w-[250px] items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      dispatch(decreasequantity(item.id));
                    }}
                    className="text-2xl w-20 h-10 bg-[#f0f0f0] "
                  >
                    -
                  </button>
                  <p className="text-xl font-semibold"> {item.quantity}</p>
                  <button
                    onClick={() => {
                      dispatch(increasequantity(item.id));
                    }}
                    className="text-2xl w-20 h-10 bg-[#f0f0f0]"
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(removefromcart(item.id));
                    }}
                    className="bg-[#f0f0f0] h-10 w-30 rounded"
                  >
                    Remove
                  </button>
                </div>
                <h2 className="p-20 text-2xl font-bold">${item.price}</h2>
                <h2 className="p-20 text-2xl font-bold">
                  Total Price: ${item.quantity * item.price}
                </h2>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            dispatch(clearcart());
          }}
          className="m-7 bg-[#f0f0f0] h-10 w-30 rounded "
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cartitems;
