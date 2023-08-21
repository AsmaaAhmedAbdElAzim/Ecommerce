import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAllOrders from '../../Components/Admin/AdminAllOrders'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import Pagination from '../../Components/Utility/Pagination'

export default function AdminAllOrderPage() {
  return (
    <div className='font'>
       
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
        <AdminAllOrders/>
        </Col>
        <Pagination/>
    </Row>
</Container>
</div>
  )
}
