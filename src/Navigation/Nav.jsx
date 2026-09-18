import React from 'react'
import {FiHeart} from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from '../features/Productsslice/productSlice';

function Nav() {

    const CartAddedItems = useSelector(state=> state.cart.items)
    const dispatch = useDispatch()
    return (
        <nav className='flex justify-around   p-5 border-b-2 border-[#f3f3f3]' >
            <div>
            <input type="text" placeholder='Enter your Search' className=' bg-[#f7f6f6] outline-none px-5 py-3 w-56 relative ' onChange={(e) => dispatch(setSearch(e.target.value)) } />
            </div>
            <div className='flex items-center' >
                <a className='no-underline text-[rgb(97,97,97)]  ' href="#"><FiHeart className=' w-6 h-6 ml-8'/></a>
                <a className='no-underline text-[rgb(97,97,97)]' href="#">
                    <AiOutlineShoppingCart className=' w-6 h-6 ml-8'/>
                </a>
                <span>{CartAddedItems.length === 0? "": CartAddedItems.length}</span>
                <a className='no-underline text-[rgb(97,97,97)]' href="#">
                    <AiOutlineUserAdd className=' w-6 h-6 ml-8'/>
                </a>
            </div>
        </nav>
    )
}

export default Nav
