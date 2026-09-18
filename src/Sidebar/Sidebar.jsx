import React from 'react'
import Catogories from './Category/Catogories'
import Prices from './Prices/Prices'
import Colors from './Colors/Colors'
import Input from '../component/Input'

function Sidebar({ selectedCategory, setSelectedCategory }) {
    return (
        <section className='border-r-2 z-50 bg-white flex overflow-y-auto flex-col  border-[#e5e5e5] fixed h-full w-[15%]'>
            <div className='my-8 flex w-full justify-center font-bold text-xl' >
                <h1>🛒</h1>
            </div>
            <Input type="text" selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Input type="Prices" selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Input type="Colors" selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </section>
    )
}

export default Sidebar
