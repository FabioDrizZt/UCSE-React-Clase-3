import React from 'react'

export default function Insignia(props) {
  return (
    <div
      style={{
        width: '50%',
        background: props.color || '#24a11e',
        borderRadius: '50%',
        margin: '10px auto',
        padding: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      }}
    >
      <h4>Insignia {props.descripcion}</h4>
    </div>
  )
}
