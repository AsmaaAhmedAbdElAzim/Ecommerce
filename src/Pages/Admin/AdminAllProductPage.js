import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAllProduct from '../../Components/Admin/AdminAllProduct'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import Pagination from '../../Components/Utility/Pagination'

export default function AdminAllProductPage() {
  return (
    <div className='font py-4'>
    <Container >
        <Row>
            <Col sm="3" xs="2" md="2">
              <AdminSideBar/>
            </Col>

            <Col sm='9' xs='10' md='10'>
              <AdminAllProduct/>
            </Col>

        </Row>
        <Pagination/>
    </Container>
    </div>
  )
}
