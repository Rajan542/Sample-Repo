import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    let name="Venkat"
  return (
    <div>
        <h1>ParentComponent</h1>
        <p>My name is {name}</p>
        <hr />
        <ChildComponent  myName={name}/>
    </div>
  )
}

export default ParentComponent