import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../Images/slider1.png';
import slider4 from '../../Images/slider4.png';
import prod3 from "../../Images/prod3.png";
import prod4 from "../../Images/prod4.png";


export default function Slider() {
  return (
    
    <Carousel>
      <Carousel.Item  className="slider-background" interval={2000}>
        <div className='d-flex justify-content-center align-items-center'>
          <img src={slider1} alt="slider1" className=' '  
          style={{ height: "296px", width: "313.53px" }}/>
        
        <div>
        <h3 className="slider-title">هناك خصم كبير</h3>
        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>

        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item  className="slider-background2" interval={2000}>
      <div className='d-flex justify-content-center align-items-center'>
          <img 
          src={slider4} alt="slider1"
           className=''
           style={{ height: "296px", width: "313.53px" }}
           />
        
        <div>
        <h3 className="slider-title">هناك خصم كبير</h3>
        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>

        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-background3" interval={2000}>
      <div className='d-flex justify-content-center align-items-center'>
          <img 
          src={prod3} alt="slider1" 
          className=''
          style={{ height: "296px", width: "313.53px" }}/>
        
        <div>
        <h3 className="slider-title">هناك خصم كبير</h3>
        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>

        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-background4" interval={2000}>
      <div className='d-flex justify-content-center align-items-center'>
          <img 
          src={prod4} alt="slider1"
           className=''
          style={{ height: "296px", width: "313.53px" }}/>
        
        <div>
        <h3 className="slider-title">هناك خصم كبير</h3>
        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>

        </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

