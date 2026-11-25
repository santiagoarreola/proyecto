function Header({ verMapa, abrirMapa }) {
  return (
    <header className="header">
      <a className="marca" href="#inicio"><span className="logo">A<span>•</span></span><span>Alerta Urbana<small>GUADALAJARA</small></span></a>
      <nav><a className="activo" href="#inicio">Inicio</a><a href="#pronostico">Pronóstico</a><a href="#reportes">Reportes</a></nav>
      <div className="acciones-ubicacion"><span className="ubicacion">⌖ Guadalajara, Jalisco</span><button className="boton-mapa" onClick={abrirMapa} aria-expanded={verMapa} aria-controls="mapa">⌖ {verMapa ? 'Ocultar mapa' : 'Ver mapa'}</button></div>
    </header>
  )
}
export default Header
