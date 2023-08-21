import React from 'react'
import { Col } from 'react-bootstrap'

export default function BrandCard({img, background}) {
  return <>
  <Col
   xs="6"
   sm="6"
   md="4"
   lg="2"
   className="my-4 d-flex justify-content-around ">
  <div className="allCard mb-3 ">
    <div 
    className="categoty-card "
    style={{ backgroundColor: `${background}` }}>
    <img alt="zcv" src={img} className="categoty-card-img" />
    
    </div>
    

  </div>
  </Col>
  </>
}
