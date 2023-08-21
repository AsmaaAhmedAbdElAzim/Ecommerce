import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserAllOrder from '../../Components/Users/UserAllOrder'
import UserSideBar from '../../Components/Users/UserSideBar'

export default function UserAllOrderPage() {
  return (
    <div className='font'>
       
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <UserSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
       <UserAllOrder/>
        </Col>
        
    </Row>
</Container>
</div>
  )
}
