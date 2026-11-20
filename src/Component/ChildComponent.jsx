import React from 'react'
import GrandChild from './GrandChild'

const ChildComponent = (props) => {
    console.log(props)
  return (
    <div>
        <h1>ChildComponent</h1>
        <p>My name is {props.myName}</p>
        <hr />
        <GrandChild myName={props.myName}/>
    </div>
  )
}

export default ChildComponent