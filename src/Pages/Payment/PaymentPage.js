import React from 'react'
import { Container } from 'react-bootstrap'
import PaymentMethod from '../../Components/Payment/PaymentMethod'

export default function PaymentPage() {
  return (
    <div className='font'>
    <Container style={{minHeight:'670px'}}>
          <PaymentMethod/>
        </Container>
        </div>
  )
}
