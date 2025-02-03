import Product from "./Products";
import React from 'react'

const Featured = () => {
  return (
      <section className="max-w-[1500px] justify-self-center">
          <h1 className="text-[#272343] text-[32px]">Featured Products</h1>
          <Product/>
    </section>
  )
}

export default Featured