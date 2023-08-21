import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGallary from './ProductGallary'
import ProductText from './ProductText'

export default function ProductDetailes() {
  return (
    <div>
    <Row className='py-3'>
        <Col lg="4">
            <ProductGallary />
        </Col>

        <Col lg="8">

               <ProductText />
        </Col>
    </Row>
</div>
  )
}
