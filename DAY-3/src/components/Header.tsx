import Link from 'next/link'
import { MdDone } from "react-icons/md";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { PiShoppingCartSimple } from "react-icons/pi";
import Image from 'next/image';


function Header() {
    return (
        <header>
            {/* First Section  */}

            <div className="bg-[#272343] text-white py-[14px] px-[24px] flex flex-col sm:flex-row gap-5 items-center justify-between md:px-32 lg:px-52 2xl:px-[300px]">
                <div className="flex gap-2 items-center">
                    <MdDone className='text-[16px]' />
                    <p className='text-[13px]'>Free shipping on all orders over $50</p>
                </div>

                <div className='flex gap-6 items-center text-[13px]'>
                    <div>
                        <Link href="/" className='flex gap-[6px] items-center'><p>Eng</p>
                            <FaAngleDown /></Link>
                    </div>
                    <Link href="/faq"><p>Faq</p></Link>

                    <div>
                        <Link href="/" className='flex gap-[6px] items-center'><HiOutlineExclamationCircle />
                            <p>Need Help</p></Link>
                    </div>
                </div>
            </div>

            {/* Second Section  */}

            <div className='bg-[#F0F2F3] flex justify-between items-center py-5 px-10 sm:px-24 md:px-32 lg:px-52 2xl:px-[300px]'>
                <div className='flex gap-2'>
                    <Image
                        alt='logo'
                        width={40}
                        height={40}
                        src="/logoIcon.png"></Image>
                    <h1 className='text-center text-[#272343] text-[26px] font-medium'>Comforty</h1>
                </div>

                <Link href="/cart">
                    <div className='bg-white px-4 py-[11px] rounded-lg flex items-center text-center gap-2'>
                        <PiShoppingCartSimple className='text-[22px] text-[#272343]'/>
                        <p>Cart</p>
                        <div className='rounded-full bg-[#007580] text-[10px] font-medium h-5 w-5 text-white content-center'>
                            <p className={`'text-center' `}>2</p>
                        </div>
                    </div>
                </Link>

            </div>

            {/* Third Section  */}

            <nav className='flex flex-col items-center gap-12 md:flex-row md:justify-between py-[14px] px-24 md:px-32 lg:px-52 2xl:px-[300px] border-b'>
                <ul className='flex gap-8 text-[14px] font-medium text-[#636270]'>
                    <Link href="/"> <li className='text-[#007580]'>Home</li></Link>
                    <Link href="shop" className='hover:text-[#007580]'> <li>Shop</li></Link>
                    <Link href="./product" className='hover:text-[#007580]'> <li>Product</li></Link>
                    <Link href="pages" className='hover:text-[#007580]'><li>Pages</li></Link>
                    <Link href="./about" className='hover:text-[#007580]'> <li>About</li></Link>
                </ul>
                <div className='flex gap-2 text-[14px]'>
                    <h6 className='text-[#636270]'>Contact:</h6>
                    <Link href="tel:+18085550001"><p className='font-medium'>(808) 555-0111</p></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header