import React from 'react'
import ProductInfo from './data/products'
import { PiShoppingCartSimple } from "react-icons/pi";

const OurProducts = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-x-5 justify-self-center mb-20'>
            {ProductInfo.slice(0, 8).map((info, index) =>
                <div className='justify-self-center' key={index}>
                    <div className=' w-[312px] h-[312px] bg-cover pt-5 pl-5'
                        style={{ backgroundImage: `url(${info.bgImg})` }}>
                        <div className={` py-[6px] px-[10px] rounded-[4px] w-[49px]  `}
                            style={{ backgroundColor: info.bgcolor }}>
                            <p className='text-center text-[13px] font-medium text-white'>{info.text}</p></div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-base text-[#007580]'>Library Stool Chair</p>
                            <p className='text-lg'>$20 <span className='text-[14px] line-through text-[#9A9CAA]'>{info.strike}</span> </p>
                        </div>
                        <div className=' py-[10px] px-[10px] rounded-lg'
                            style={{ backgroundColor: info.shouldInvert ? '#F0F2F3' : '#029FAE ' }}>
                            <PiShoppingCartSimple className='text-[24px] text-[#272343]'

                                style={{
                                    filter: info.shouldInvert ? 'none' : 'invert(1)',

                                }}/>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default OurProducts