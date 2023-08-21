import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAddCatigory from '../../Components/Admin/AdminAddCatigory'
import AdminSideBar from '../../Components/Admin/AdminSideBar'

export default function AdminAddCatigoryPage() {
  return (
    <div className='font'>
       
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
        <AdminAddCatigory/>
        </Col>
        
    </Row>
</Container>
</div>
  )
}
