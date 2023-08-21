import React from 'react'
import prev from '../../images/prev.png'
export default function RightButton(onClick, onDisable) {
  return (
    <img
    src={prev}
    alt=""
    width="35px"
    onClick={onClick}
    onDisable={onDisable}
    height="35px"
    style={{ float: "left", marginTop: "220px", cursor: "pointer" }}
/>
  )
}
