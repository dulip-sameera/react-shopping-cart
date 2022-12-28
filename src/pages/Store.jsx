import React from "react";
import ItemCard from "../components/ItemCard";
import { itemList } from "../data/store_itesm";

const Store = () => {
  return (
    <section className="container mx-auto p-4 flex flex-col gap-10  items-center md:items-stretch md:justify-center md:flex-row  md:flex-wrap">
      {itemList.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </section>
  );
};

export default Store;
