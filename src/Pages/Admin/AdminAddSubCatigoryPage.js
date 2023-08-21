import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAddSubCatigory from '../../Components/Admin/AdminAddSubCatigory'
import AdminSideBar from '../../Components/Admin/AdminSideBar'

export default function AdminAddSubCatigoryPage() {
  return (
    <div className='font'>
       
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
        <AdminAddSubCatigory/>
        </Col>
        
    </Row>
</Container>
</div>
  )
}
