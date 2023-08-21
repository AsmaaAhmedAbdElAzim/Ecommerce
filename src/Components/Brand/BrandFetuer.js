import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitles from '../Utility/SubTitles'
import brand1 from "../../Images/brand1.png";
import brand2 from "../../Images/brand2.png";
import brand3 from "../../Images/brand3.png";
import BrandCard from './BrandCard';
export default function BrandFetuer({title, btntitle,pathText}) {
  return (
    <Container>
            <SubTitles title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
                <BrandCard img={brand1} />
                <BrandCard img={brand2} />
                <BrandCard img={brand3} />
                <BrandCard img={brand2} />
                <BrandCard img={brand1} />
                <BrandCard img={brand3} />

            </Row>
        </Container>
  )
}
