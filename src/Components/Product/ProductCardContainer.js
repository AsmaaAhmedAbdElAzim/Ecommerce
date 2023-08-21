import React from 'react'
import ProuductCard from './ProuductCard'
import SubTiltles from '../../Components/Utility/SubTitles'
import { Container,Row } from 'react-bootstrap'

export default function ProductCardContainer({title, btntitle,pathText}) {
  return <>
   <Container>
            <SubTiltles title={title} btntitle={btntitle} pathText={pathText} />
            <Row className='my-2 d-flex justify-content-between'>
                <ProuductCard />
                <ProuductCard />
                <ProuductCard />
                <ProuductCard />
                
            </Row>
        </Container>
  </>
}
