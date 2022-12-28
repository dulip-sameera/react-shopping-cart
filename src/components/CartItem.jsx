import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../store/features/cart.slice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        imgUrl: item.imgURL,
      })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(
      removeFromCart({
        id: item.id,
      })
    );
  };

  return (
    <div className="grid md:grid-cols-4 bg-customBlack p-4 rounded-lg text-customCyan gap-5 mb-5 justify-items-center">
      <div>
        <Link to={`/store/${item.id}`}>
          <img src={item.imgUrl} alt={item.name} className="rounded-lg " />
        </Link>
      </div>
      <Link to={`/store/${item.id}`}>
        <div className="text-lg h-full md:ml-5">{item.name}</div>
      </Link>

      <Link to={`/store/${item.id}`}>
        <div className="text-lg">Unit Price: ${item.price}</div>
      </Link>

      <div className="flex bg-customDarkGrey w-fit h-fit rounded-md">
        <div
          className="px-4 py-1 border-r-2 border-r-slate-700 hover:cursor-pointer hover:bg-slate-700 rounded-l-md"
          onClick={removeFromCartHandler}
        >
          -
        </div>
        <div className="px-4 py-1 border-r-2 border-r-slate-700  hover:cursor-default">
          {item.qty}
        </div>
        <div
          className="px-4 py-1 hover:cursor-pointer hover:bg-slate-700 rounded-r-md"
          onClick={addToCartHandler}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default CartItem;
