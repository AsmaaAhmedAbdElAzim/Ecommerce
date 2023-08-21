import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CatigoryCard from './CatigoryCard'
import clothe from "../../Images/clothe.png";
import cat2 from "../../Images/cat2.png";
import labtop from "../../Images/labtop.png";
import sale from "../../Images/sale.png";
import pic from "../../Images/pic.png";

export default function CatigoryContainer() {
  return (
    <Container>
        <div className="admin-content-text mt-2 ">كل التصنيفات</div>
        <Row className='my-2 d-flex justify-content-between'>
            
            <CatigoryCard title="اجهزة منزلية" img={clothe} background='rgba(244, 219, 164,.5)'/> 
            <CatigoryCard title="اجهزة منزلية" img={clothe} background='rgba(244, 219, 164,.5)'/> 
            <CatigoryCard title="اجهزة منزلية" img={cat2} background="rgba(244, 219, 164,.5) "/>
            <CatigoryCard title="اجهزة منزلية" img={labtop} background=" rgba(0, 52, 255,.5) "/>
            <CatigoryCard title="اجهزة منزلية" img={sale} background="rgba(244, 219, 164,.5)" />
            <CatigoryCard title="اجهزة منزلية" img={clothe} background='rgba(244, 219, 164,.5)'/> 
            <CatigoryCard title="اجهزة منزلية" img={clothe} background='rgba(244, 219, 164,.5)'/> 
            <CatigoryCard title="اجهزة منزلية" img={cat2} background="rgba(244, 219, 164,.5) "/>
            <CatigoryCard title="اجهزة منزلية" img={labtop} background=" rgba(0, 52, 255,.5) "/>
            <CatigoryCard title="اجهزة منزلية" img={sale} background="rgba(244, 219, 164,.5)" />
            <CatigoryCard title="اجهزة منزلية" img={clothe} background="rgba(244, 219, 164,.5)" />
            <CatigoryCard title="اجهزة منزلية" img={pic} background="rgba(0, 52, 255,.5)" />
            <CatigoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4"/>
            <CatigoryCard title="اجهزة منزلية" img={clothe} background='rgba(244, 219, 164,.5)'/> 
            <CatigoryCard title="اجهزة منزلية" img={clothe} background='rgba(244, 219, 164,.5)'/> 
            <CatigoryCard title="اجهزة منزلية" img={cat2} background="rgba(244, 219, 164,.5) "/>
            <CatigoryCard title="اجهزة منزلية" img={labtop} background=" rgba(0, 52, 255,.5) "/>
            <CatigoryCard title="اجهزة منزلية" img={sale} background="rgba(244, 219, 164,.5)" />
            <CatigoryCard title="اجهزة منزلية" img={clothe} background="rgba(244, 219, 164,.5)" />
            <CatigoryCard title="اجهزة منزلية" img={pic} background="rgba(0, 52, 255,.5)" />
        </Row>
    </Container>
  )
}
