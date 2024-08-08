const TarjetaEmpleado = ({ nombre, rol, departamento, children }) => {
  return (
    <div
      style={{
        width: '300px',
        background: '#93cad2',
        borderRadius: '10px',
        margin: '10px',
        padding: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      }}
    >
      <h3>Nombre: {nombre}</h3>
      <h3>rol: {rol}</h3>
      <h3>departamento: {departamento}</h3>
      {children}
    </div>
  )
}

export default TarjetaEmpleado
