import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminOrderDetaies from '../../Components/Admin/AdminOrderDetaies'
import AdminSideBar from '../../Components/Admin/AdminSideBar'


export default function AdminOrderDetalisPage() {
  return (
    <div className='font'>
       
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
        <AdminOrderDetaies/>
        </Col>
        
    </Row>
</Container>
</div>
  )
}
