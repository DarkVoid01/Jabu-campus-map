import React from 'react'
import "./Info.scss"

const Info = (props) => {
  return (
    <div className="info">
        <div className="wrapper">
        <div className="name">
        {props.name}
      </div>
      <div className="image">
        
      </div>
      <div className="type">
        {props.type}
      </div>
      <div className="time">
        Times of operation: {props.time}
      </div>
        </div>
    </div>
  )
}

export default Info