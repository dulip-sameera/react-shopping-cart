import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { itemList } from "../data/store_itesm";
import { addBgImage, resetBg } from "../store/features/bgImage.slice";

const ItemPage = () => {
  const { itemId } = useParams();
  const item = itemList.find((item) => item.id === itemId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addBgImage({
        bgImg: item.imgBgURL,
      })
    );

    return () => dispatch(resetBg());
  }, [dispatch, item.imgBgURL]);

  return (
    <section className="container mx-auto p-4">
      <div>sfsd</div>
    </section>
  );
};

export default ItemPage;
