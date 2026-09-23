import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategory,setMaximumPrice , setMinimumPrice, setColors } from '../features/Productsslice/productSlice'


function Input({type }) {
  const dispatch = useDispatch()

    const radiostyle = "w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-blue-500 checked:bg-blue-500 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"

    if(type === "text"){
        return (
            <div className="mt-2  ml-3">
      <h2 className="mb-5 p-2 font-bold text-xl">Categories</h2>
      <div className="flex gap-3 pl-5 flex-col">
        <label className="flex gap-3 relative items-center cursor-pointer font-medium">
          <input type="radio" name="test" onChange={() => dispatch(setCategory("All"))} className={radiostyle} />
          <span className="w-5 h-5 absolute top-0 left-0"></span>All
        </label>
        <label className="flex gap-3 relative items-center cursor-pointer font-medium">
          <input
            type="radio"
            name="test"
            onChange={() => dispatch(setCategory("sneakers"))}
            className={radiostyle}
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>Sneakers
        </label>
        <label className="flex gap-3 relative items-center  cursor-pointer font-medium">
          <input
            type="radio"
            name="test"
            onChange={() => dispatch(setCategory("flats"))}
            className={radiostyle}
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>Flats
        </label>
        <label className="flex gap-3 items-center relative  cursor-pointer font-medium">
          <input
            type="radio"
            name="test"
            onChange={() => dispatch(setCategory("sandals"))}
            className={radiostyle}
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>Sandals
        </label>
        <label className="flex gap-3 items-center relative  cursor-pointer font-medium">
          <input
            type="radio"
            name="test"
            onChange={() => dispatch(setCategory("heels"))}
            className={radiostyle}
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>Heels
        </label>
      </div>
    </div>
        )
    }if(type === "Prices"){
        return (
             <div className="mt-2  ml-3">
      <h2 className="mb-5 p-2 font-bold text-xl">Prices</h2>
      <div className="flex gap-3 pl-5 flex-col">
         <label className="flex gap-3 relative items-center  cursor-pointer font-serif">
          <input
            type="radio"
            name="prices"
            className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-blue-500 checked:bg-blue-500 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
            onChange={() => {dispatch(setMaximumPrice(200));
            dispatch(setMinimumPrice(0))}}
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>All
        </label>
        <label className="flex gap-3 relative items-center cursor-pointer font-serif">
          <input type="radio" name="prices"  className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-blue-500 checked:bg-blue-500 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer" 
          onChange={() => {dispatch(setMaximumPrice(50));
            dispatch(setMinimumPrice(0))}}
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>$0 - $50
        </label>
        <label className="flex gap-3 relative items-center cursor-pointer font-serif">
          <input
            type="radio"
            name="prices"
            className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-blue-500 checked:bg-blue-500 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
            onChange={() => {dispatch(setMaximumPrice(100));
              dispatch(setMinimumPrice(50))
            }}
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>$50 - $100
        </label>
       
        <label className="flex gap-3 items-center relative  cursor-pointer font-serif">
          <input
            type="radio"
            name="prices"
            className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-blue-500 checked:bg-blue-500 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
            onChange={() => {dispatch(setMaximumPrice(150));
              dispatch(setMinimumPrice(100))
            }}
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>$100 - $150
        </label>
        <label className="flex gap-3 items-center relative  cursor-pointer font-serif">
          <input
            type="radio"
            name="prices"
            className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-blue-500 checked:bg-blue-500 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
            onChange={() => {dispatch(setMaximumPrice(200));
              dispatch(setMinimumPrice(150))
            }}

          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>$150 - $200
        </label>
      </div>
    </div>
        )
    }if(type === "Colors"){
        return (
             <div className="mt-2  ml-3">
      <h2 className="mb-5 p-2 font-bold text-xl">Colors</h2>
      <div className="flex gap-3 pl-5 flex-col">
         <label className="flex gap-3 relative items-center  cursor-pointer font-serif">
          <input
            type="radio"
            name="colors"
            className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-blue-500 checked:bg-blue-500 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
            onChange={() => dispatch(setColors("All"))}
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>All
        </label>
        <label className="flex gap-3 relative items-center cursor-pointer font-serif">
          <input type="radio" name="colors" className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-black checked:bg-black checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
          onChange={() => dispatch(setColors("Black"))}
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>Black
        </label>
        <label className="flex gap-3 relative items-center cursor-pointer font-serif">
          <input
            type="radio"
            name="colors"
            className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-amber-100 checked:bg-amber-100 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
          onChange={() => dispatch(setColors("White"))}
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>White
        </label>
       
        <label className="flex gap-3 items-center relative  cursor-pointer font-serif">
          <input
            type="radio"
            name="colors"
            className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-blue-500 checked:bg-blue-500 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
          onChange={() => dispatch(setColors("Blue"))}
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>Blue
        </label>
        <label className="flex gap-3 items-center relative  cursor-pointer font-serif">
          <input
            type="radio"
            name="colors"
            className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-red-500 checked:bg-red-500 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
          onChange={() => dispatch(setColors("Red"))}
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>Red
        </label>
        <label className="flex gap-3 items-center relative  cursor-pointer font-serif">
          <input
            type="radio"
            name="colors"
            className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-green-500 checked:bg-green-500 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
          onChange={() => dispatch(setColors("Green"))}
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>Green
        </label>
      </div>
    </div>
        )
    }
    return null;
}

export default Input
