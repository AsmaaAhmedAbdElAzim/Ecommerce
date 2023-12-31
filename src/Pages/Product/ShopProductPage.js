import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CatigoryHeader from '../../Components/Catigory/CatigoryHeader'
import ProductCardContainer from '../../Components/Product/ProductCardContainer'
import Pagination from '../../Components/Utility/Pagination'
import SearchCountResult from '../../Components/Utility/SearchCountResult'
import SideFilter from '../../Components/Utility/SideFilter'

export default function ShopProductPage() {
  return (
    <div style={{ minHeight: '670px' }}>
    <CatigoryHeader />
    <Container>
        <SearchCountResult title="400 نتجية بحث" />
        <Row className='d-flex flex-row'>
            <Col sm="2" xs="2" md="1" className='d-flex'>
                <SideFilter />
            </Col>
            <Col sm="10" xs="10" md="11">
                 <ProductCardContainer title="" btntitle=""/>
            </Col>
        </Row>
            <Pagination />
    </Container>
    </div>
    
  )
}

