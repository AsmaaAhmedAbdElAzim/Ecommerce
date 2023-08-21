import React from 'react'
import { Row } from 'react-bootstrap'
import AdminOrderItem from './AdminOrderItem'


export default function AdminAllOrders() {
  return (
    <div >
    <div className='admin-content-text' >ادارة جميع الطلبات</div>
    <Row className='justify-content-start'>
       <AdminOrderItem/>
       <AdminOrderItem/>
       <AdminOrderItem/>
       <AdminOrderItem/>
       <AdminOrderItem/>
        
        
    </Row>
</div>
  )
}
