import React from 'react'

const Welcomeall = (props) => {
  return (
    <div>hello,{props.name}</div>
  )
}
Welcomeall.defaultProps={
    name:'guest'
}

export default Welcomeall;