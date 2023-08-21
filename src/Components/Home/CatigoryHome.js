import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CatigoryCard from '../Catigory/CatigoryCard'
import SubTitles from '../Utility/SubTitles';
import clothe from "../../Images/clothe.png";
import cat2 from "../../Images/cat2.png";
import labtop from "../../Images/labtop.png";
import sale from "../../Images/sale.png";
import pic from "../../Images/pic.png";


export default function CatigoryHome() {
  return <>
  <Container>
    <SubTitles title='تصنيفات'btntitle='المزيد' pathText="/allcategory"/>
    <Row className='my-2 d-flex justify-content-between'>
                <CatigoryCard title="اجهزة منزلية" img={clothe} background='rgba(244, 219, 164,.5)'/> 
                <CatigoryCard title="اجهزة منزلية" img={cat2} background="rgba(244, 219, 164,.5) "/>
                <CatigoryCard title="اجهزة منزلية" img={labtop} background=" rgba(0, 52, 255,.5) "/>
                <CatigoryCard title="اجهزة منزلية" img={sale} background="rgba(244, 219, 164,.5)" />
                <CatigoryCard title="اجهزة منزلية" img={clothe} background="rgba(244, 219, 164,.5)" />
                <CatigoryCard title="اجهزة منزلية" img={pic} background="rgba(0, 52, 255,.5)" />
            </Row>
   
  </Container>
  
  </>
}
