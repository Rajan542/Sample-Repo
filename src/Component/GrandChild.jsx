import React from 'react'

const GrandChild = (props) => {
  return (
    <div>
        <h1>GrandChild</h1>
        <p>My name is {props.myName}</p>
    </div>
  )
}

export default GrandChild