function TarjetaReporte({ tipo, lugar, descripcion, hora, color }) {
  return (
    <article className="reporte">
      <span className={'icono-reporte ' + color}>{tipo === 'Inundación' ? '≈' : tipo === 'Bache' ? '◉' : '↟'}</span>
      <div><span className={'etiqueta ' + color}>{tipo}</span><h3>{lugar}</h3><p>{descripcion}</p><small>⌖ Guadalajara <span>· {hora}</span></small></div>
    </article>
  )
}
export default TarjetaReporte
