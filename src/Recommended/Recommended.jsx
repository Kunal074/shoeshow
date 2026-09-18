import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/Productsslice/productSlice";


function Recommended() {
  const dispatch = useDispatch()
  return (
    <div>
      <h2 className="text-2xl font-bold my-5 font-sans ml-80">Recommended</h2>
      <div className="flex flex-wrap ml-80 gap-2 ">
        <button onClick={()=> dispatch(setSearch("nike"))} className="text-[#323232] cursor-pointer bg-transparent border border-[#ccc] mr-1.5  py-2.5 px-5 rounded">
          Nike
        </button>
        <button onClick={()=> dispatch(setSearch("adidas"))} className=" text-[#323232] cursor-pointer bg-transparent border border-[#ccc] mr-1.5  py-2.5 px-5 rounded">
          Adidas
        </button>
        <button onClick={()=> dispatch(setSearch("puma"))} className=" text-[#323232] cursor-pointer bg-transparent border border-[#ccc] mr-1.5  py-2.5 px-5   rounded">
          Puma
        </button>
        <button onClick={()=> dispatch(setSearch("reebok"))} className=" text-[#323232] cursor-pointer bg-transparent border border-[#ccc] mr-1.5  py-2.5 px-5 rounded">
          Reebok
        </button>
        <button onClick={()=> dispatch(setSearch("vans"))} className=" text-[#323232] cursor-pointer bg-transparent border border-[#ccc] mr-1.5  py-2.5 px-5 rounded">
          Vans
        </button>
        <button onClick={()=> dispatch(setSearch("bata"))} className=" text-[#323232] cursor-pointer bg-transparent border border-[#ccc] mr-1.5  py-2.5 px-5 rounded">
          Bata
        </button>
      </div>
    </div>
  );
}

export default Recommended;
