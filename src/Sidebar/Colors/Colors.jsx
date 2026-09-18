import React from 'react'

function Colors() {
    return (
        <div className="mt-2  ml-3">
      <h2 className="mb-5 p-2 font-bold text-xl">Colors</h2>
      <div className="flex gap-3 pl-5 flex-col">
         <label className="flex gap-3 relative items-center  cursor-pointer font-serif">
          <input
            type="radio"
            name="colors"
            className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-blue-500 checked:bg-blue-500 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>All
        </label>
        <label className="flex gap-3 relative items-center cursor-pointer font-serif">
          <input type="radio" name="colors" className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-black checked:bg-black checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer" />
          <span className="w-5 h-5 absolute top-0 left-0"></span>Black
        </label>
        <label className="flex gap-3 relative items-center cursor-pointer font-serif">
          <input
            type="radio"
            name="colors"
            className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-amber-100 checked:bg-amber-100 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>White
        </label>
       
        <label className="flex gap-3 items-center relative  cursor-pointer font-serif">
          <input
            type="radio"
            name="colors"
            className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-blue-500 checked:bg-blue-500 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>Blue
        </label>
        <label className="flex gap-3 items-center relative  cursor-pointer font-serif">
          <input
            type="radio"
            name="colors"
            className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-red-500 checked:bg-red-500 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>Red
        </label>
        <label className="flex gap-3 items-center relative  cursor-pointer font-serif">
          <input
            type="radio"
            name="colors"
            className="w-4 h-4 appearance-none relative rounded-full border-2 border-gray-300 checked:border-green-500 checked:bg-green-500 checked:after:content-[''] checked:after:absolute checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-white checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 cursor-pointer"
          />
          <span className="w-5 h-5 absolute top-0 left-0"></span>Green
        </label>
      </div>
    </div>
    )
}

export default Colors
