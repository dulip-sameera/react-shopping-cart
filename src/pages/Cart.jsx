import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { cartBG } from "../data/imgs";
import { addBgImage, resetBg } from "../store/features/bgImage.slice";

const Cart = () => {
  const { items, totalCost } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addBgImage({
        bgImg: cartBG,
      })
    );

    return () => dispatch(resetBg());
  }, [dispatch]);

  return (
    <section className="container mx-auto p-4 flex items-center flex-col">
      <div className="w-[70%]">
        {items.map((item) => (
          <CartItem item={item} />
        ))}
        <div className="text-customCyan text-center text-3xl md:text-5xl ">
          Total Cost: ${totalCost}
        </div>
      </div>
    </section>
  );
};

export default Cart;
