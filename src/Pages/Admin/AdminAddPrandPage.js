import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAddPrand from '../../Components/Admin/AdminAddPrand'
import AdminSideBar from '../../Components/Admin/AdminSideBar'

export default function AdminAddPrandPage() {
  return (
    <div className='font'>
       
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
        <AdminAddPrand/>
        </Col>
        
    </Row>
</Container>
</div>
  )
}
