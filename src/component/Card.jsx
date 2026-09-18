import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cart/cartSlice";
import products from "../db/data";

function Card(props) {
    const dispatch = useDispatch()
    const reviews = Math.floor(Math.random()*500)


    const handleAdd = (product) => {
        dispatch(addToCart(product))
    }
  return (
    <section className="flex flex-col border-2 cursor-pointer border-[#ededed] m-5 object-cover  p-5">
      <img
        className="w-52 h-50 object-contain mb-4"
        src={props.products.img}
        alt=""
      />
      {/* details */}
      <div>
        <h3 className="mb-4">{props.products.title}</h3>
        <section className="flex items-center mb-4">
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <span className="text-lg font-medium ml-2.5">{reviews} reviews</span>
        </section>
        <section className="flex justify-around">
          <div>
            <del>{props.products.prevPrice}</del> ${props.products.newPrice}
          </div>
          <div >
            <BsFillBagHeartFill onClick={() => handleAdd(props.products)} className="text-[#535353] hover:scale-150 active:scale-90 transition" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;
