import React from 'react'
import { Link } from 'react-router-dom'
export default function SubTitles({title,btntitle,pathText}) {
  return <>
  <div className='d-flex justify-content-between align-items-center pt-4'>
    <h3 className="sub-tile">{title}</h3>
    {btntitle?
    <Link to={`${pathText}`} style={{ textDecoration: 'none' }}>
        <div className="shopping-now">{btntitle}</div>
     </Link>
    :''}
   

  </div>
  </>
}
