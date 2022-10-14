import React from 'react'

function Button(props) {
    const {color,Value  } = props
  return (
    <div>
      <Button  color={color} >{Value}</Button>
    </div>
  )
}

export default Button
