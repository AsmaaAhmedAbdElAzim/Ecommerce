import React from 'react'
import { Row } from 'react-bootstrap'
import AdminProductCard from './AdminProductCard'

export default function AdminAllProduct() {
  return (
    <div>
            <div className='admin-content-text'>ادارة جميع المنتجات</div>
            <Row className='justify-content-start'>
                <AdminProductCard />
                <AdminProductCard />
                <AdminProductCard />
                <AdminProductCard />
                <AdminProductCard />
                <AdminProductCard />
                
            </Row>
            
        </div>
  )
}
