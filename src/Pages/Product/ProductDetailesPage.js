import React from 'react'
import { Container } from 'react-bootstrap'
import CatigoryHeader from '../../Components/Catigory/CatigoryHeader'
import ProductCardContainer from '../../Components/Product/ProductCardContainer'
import ProductDetailes from '../../Components/Product/ProductDetailes'
import RateContainer from '../../Components/Rate/RateContainer'

export default function ProductDetailesPage() {
  return (
    <div style={{ minHeight: '670px' }}>
            <CatigoryHeader />
            <Container>
                <ProductDetailes/>
                <RateContainer />
                
                <ProductCardContainer title="منتجات قد تعجبك"  />
               
                
            </Container>
        </div>
  )
}
