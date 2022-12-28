import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { itemList } from "../data/store_itesm";
import { addBgImage, resetBg } from "../store/features/bgImage.slice";
import { addToCart, removeFromCart } from "../store/features/cart.slice";

const ItemPage = () => {
  const { itemId } = useParams();
  const item = itemList.find((item) => item.id === itemId);
  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.cart.items);
  const doesTheItemExistsInTheCart = cartList.find(
    (item) => item.id === itemId
  );
  const itemQty = doesTheItemExistsInTheCart
    ? doesTheItemExistsInTheCart.qty
    : 0;

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
        id: itemId,
      })
    );
  };

  useEffect(() => {
    dispatch(
      addBgImage({
        bgImg: item.imgBgURL,
      })
    );

    return () => dispatch(resetBg());
  }, [dispatch, item.imgBgURL]);

  return (
    <section className="container mx-auto p-4 text-customCyan flex  items-center justify-center h-[80vh]">
      <div className="w-[70%] flex gap-10 flex-col md:flex-row">
        <div>
          <img
            src={item.imgURL}
            alt={item.name}
            className="w-full h-full rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-2xl mb-2">{item.name}</h1>
          <p className="text-sm mb-4">{item.description}</p>
          <h2 className="text-xl">Price: ${item.price}</h2>
          <div className="flex bg-customDarkGrey w-fit  rounded-md mt-4">
            <div
              className="px-4 py-1 border-r-2 border-r-slate-700 hover:cursor-pointer hover:bg-slate-700 rounded-l-md"
              onClick={removeFromCartHandler}
            >
              -
            </div>
            <div className="px-4 py-1 border-r-2 border-r-slate-700  hover:cursor-default">
              {itemQty}
            </div>
            <div
              className="px-4 py-1 hover:cursor-pointer hover:bg-slate-700 rounded-r-md"
              onClick={addToCartHandler}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemPage;
