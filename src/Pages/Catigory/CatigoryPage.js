import React from 'react'
import { Container } from 'react-bootstrap'
import CatigoryContainer from '../../Components/Catigory/CatigoryContainer'
import Pagination from '../../Components/Utility/Pagination'

export default function CatigoryPage() {
  return (
    <Container>
        <div style={{minHeight:'670px'}}>
        
        <CatigoryContainer />
        <Pagination/>
    </div>
    </Container>
  )
}
