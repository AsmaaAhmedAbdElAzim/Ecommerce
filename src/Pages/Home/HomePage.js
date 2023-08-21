import React from 'react'
import CatigoryHome from '../../Components/Home/CatigoryHome'
import Slider from '../../Components/Home/Slider'
import ProductCardContainer from '../../Components/Product/ProductCardContainer'
import DiscripationSection from '../../Components/Home/DiscripationSection'
import BrandFetuer from '../../Components/Brand/BrandFetuer'
// import ProductCard from '../../Components/Product/ProuductCard'
export default function HomePage() {
  return (
    <>
    
    <div className='font' style={{ minHeight: '670px' }}>
    <Slider/>
    <CatigoryHome/>
    <ProductCardContainer title="الاكثر مبيعا" btntitle="المزيد" pathText="/products"/>
    <DiscripationSection/>
    <ProductCardContainer title="احدث الازياء" btntitle="المزيد" pathText="/products"/>
    <BrandFetuer title='أشهر الماركات ' btntitle='المزيد '/>
    
    </div>
    </>
  )
}
