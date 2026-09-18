import React, { useState, useEffect, useMemo } from "react";

import Card from "../component/Card";
import products from "../db/data";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";

function Products() {
  const {
    products,
    category,
    sort,
    maximumPrice,
    search,
    colors,
    minimumPrice,
  } = useSelector((state) => state.products);

  const filteredItem = useMemo (()=>{
   return products.filter((product) => {

    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesColor =
      colors === "All" || product.color.toLowerCase() === colors.toLowerCase();

    const matchesPrice =
      Number(product.newPrice) >= minimumPrice &&
      Number(product.newPrice) <= maximumPrice;

    const matchesCategory =
      category === "All" ||
      product.category.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory && matchesColor && matchesPrice;
  },[ maximumPrice, search,  minimumPrice, colors, category])
  });

  
  return (
    // container
    <section className="flex flex-wrap  ml-80 mt-8">
      {/* card */}
      {filteredItem.map((item) => {
        const id = Math.floor(Math.random() * 1000);
        return <Card key={id} products={item} />;
      })}
    </section>
  );
}

export default Products;
