import React from 'react'
import logo from './data/logo'
import Image from 'next/image'

function Logos() {
    return (
        <section className=' flex lg:flex-row flex-col gap-[70px] p-4 justify-self-center items-center'>
            {logo.map((logo, index) =>
                <Image
                    key={index}
                    alt={logo.alt}
                    src={logo.address}
                    width={logo.width}
                    height={logo.height}></Image>
            )}
        </section>
    )
}

export default Logos