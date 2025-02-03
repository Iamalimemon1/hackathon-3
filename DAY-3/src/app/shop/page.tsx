import React from 'react'
import Featured from '@/components/Featured';
import Categories from '@/components/Categories';
import Explore from '@/components/Explore';
import OurProducts from '@/components/OurProducts';

export default function Home() {
  return (
    <div>
      <Featured/>
      <Categories/>
      <Explore/>
      <OurProducts/>
    </div>
  );
}
