import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../slices/productslice"; // apna sahi export name check kar le
import { addtocart } from "../slices/Cartslice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.products.items;
  });
  const status = useSelector((state) => {
    return state.products.status;
  });
  const message = useSelector((state) => {
    return state.products.error;
  });
  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);

  return (
    <div className="h=screen">
      {status === "loading" && <p className="text-4xl font-bold flex items-center justify-center h-full">Loading...</p>}
      {status === "failed" && <p className="text-4xl font-bold flex items-center justify-center h-full">Error: {message}</p>}
      {status === "succeeded" && (
        <div className="grid grid-cols-3 p-10 w-[70vw] gap-6 mx-auto">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col items-center h-100 rounded-2xl border-3 p-3 gap-3"
              >
                <div className="size-30 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-center line-clamp-2">
                  {product.title}
                </h3>

                <div className="flex flex-row gap-20">
                  <p className="text-2xl font-bold">
                    {product.rating.rate} - ★ ★ ★ ★
                  </p>
                  <h2 className="text-2xl font-bold">${product.price}</h2>
                </div>

                <div className="flex flex-row gap-10">
                  <button
                    onClick={() => {
                      dispatch(addtocart(product));
                    }}
                    className="h-12 w-35 rounded-xl font-bold bg-[#f0f0f0] border-2 border-[#cccccc]"
                  >
                    Add to Cart
                  </button>
                  <button className="h-12 w-35 rounded-xl font-bold bg-[#f0f0f0] border-2 border-[#cccccc]">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
