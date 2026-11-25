import { useState } from 'react'
import Header from './componentes/Header'
import Mapa from './componentes/Mapa'
import TarjetaReporte from './componentes/TarjetaReporte'
import Modal from './componentes/Modal'
import './App.css'

function App() {
  const [verMapa, setVerMapa] = useState(false)
  const [mostrar, setMostrar] = useState(false)
  const [nombre, setNombre] = useState('')
  const [lugar, setLugar] = useState('')
  const [comentario, setComentario] = useState('')
  const [tipo, setTipo] = useState('Inundación')
  const [error, setError] = useState('')
  const [reportes, setReportes] = useState([
    { id: 1, tipo: 'Inundación', lugar: 'Av. López Mateos', descripcion: 'Acumulación de agua en los carriles laterales.', hora: 'Ejemplo', color: 'azul' },
    { id: 2, tipo: 'Bache', lugar: 'Colonia Americana', descripcion: 'Bache sobre la calle, circula con precaución.', hora: 'Ejemplo', color: 'naranja' },
    { id: 3, tipo: 'Árbol caído', lugar: 'Zona de Chapultepec', descripcion: 'Ramas que obstruyen parte de la banqueta.', hora: 'Ejemplo', color: 'verde' },
  ])
  const pronostico = [
    { id: 1029, hora: 'N/A', icono: '☁️', temperatura: 'N/A', lluvia: 'N/A' },
    { id: 1100, hora: 'N/A', icono: '☁️', temperatura: 'N/A', lluvia: 'N/A' },
    { id: 1171, hora: 'N/A', icono: '☁️', temperatura: 'N/A', lluvia: 'N/A' },
    { id: 1242, hora: 'N/A', icono: '☁️', temperatura: 'N/A', lluvia: 'N/A' },
    { id: 1313, hora: 'N/A', icono: '☁️', temperatura: 'N/A', lluvia: 'N/A' },
    { id: 1384, hora: 'N/A', icono: '☁️', temperatura: 'N/A', lluvia: 'N/A' },
  ]

  function enviarReporte(evento) {
    evento.preventDefault()
    if (!nombre.trim() || !lugar.trim() || !comentario.trim()) {
      setError('Por favor, completa todos los campos.')
      return
    }
    const nuevo = {
      id: Date.now(), tipo, lugar: lugar.trim(),
      descripcion: comentario.trim(), nombre: nombre.trim(),
      hora: new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }),
      color: tipo === 'Inundación' ? 'azul' : tipo === 'Bache' ? 'naranja' : 'verde',
    }
    setReportes([nuevo, ...reportes])
    setNombre('')
    setLugar('')
    setComentario('')
    setError('')
    setMostrar(false)
  }

  return (
    <>
      <Header verMapa={verMapa} abrirMapa={() => setVerMapa(!verMapa)} />
      <main id="inicio">
        <div className="encabezado"><div><p className="subtitulo">TU CIUDAD, MÁS INFORMADA</p><h1>Antes de salir, mira el cielo.</h1><p>El clima y lo que pasa en las calles de Guadalajara, en un solo lugar.</p></div><span className="demo"><i /> Vista previa · clima no disponible</span></div>
        {verMapa && <Mapa cerrarMapa={() => setVerMapa(false)} />}
        <div className="columnas">
          <div className="columna-clima">
            <section className="clima">
              <div className="clima-superior"><span>⌖ Guadalajara, Jalisco</span><span className="estado">Temporada de lluvias</span></div>
              <div className="clima-central"><div><p className="hoy">ASÍ SE VE TU DÍA</p><div className="temperatura">N/A</div><h2>Clima no disponible</h2><p>Sensación térmica: N/A · Máx. N/A / Mín. N/A</p></div><div className="ilustracion" aria-label="Sol entre nubes con lluvia"><div className="sol" /><div className="nube" /><div className="gotas"><span /> <span /> <span /></div></div></div>
              <div className="datos-clima"><div><span>♧ Humedad</span><strong>N/A</strong></div><div><span>↓ Prob. de lluvia</span><strong>N/A</strong></div><div><span>≋ Viento</span><strong>N/A</strong></div></div>
            </section>
            <div className="aviso"><span className="aviso-icono">☂</span><div><strong>Un paraguas hace la diferencia.</strong><p>Consulta el pronóstico cuando esté disponible para planear tus traslados.</p></div></div>
            <section className="panel pronostico" id="pronostico"><div className="titulo-panel"><h2>Las próximas horas</h2><span>Datos pendientes de conexión</span></div><div className="horas">{pronostico.map((dato) => <div className="hora" key={dato.id}><span>{dato.hora}</span><b aria-hidden="true">{dato.icono}</b><strong>{dato.temperatura}</strong><small>↓ {dato.lluvia}</small></div>)}</div></section>
            <section className="comunidad"><span>↗</span><div><h2>Una ciudad que se cuida entre todos.</h2><p>Comparte lo que ves en tu camino y ayuda a otros a moverse mejor.</p></div><button onClick={() => { setError(''); setMostrar(true) }}>Crear reporte ↗</button></section>
          </div>
          <section className="panel reportes" id="reportes"><div className="titulo-panel"><div><p className="subtitulo">COMUNIDAD</p><h2>En las calles</h2></div><span className="contador">N/A reportes</span></div><p className="intro-reportes">Conoce las incidencias de tu ciudad.</p><div className="lista-reportes">{reportes.map((reporte) => <TarjetaReporte key={reporte.id} {...reporte} />)}</div><div className="nota-reportes"><span>ⓘ</span><p>Los reportes iniciales son ejemplos para mostrar el diseño. No son alertas verificadas.</p></div><button className="boton-reporte" onClick={() => { setError(''); setMostrar(true) }}>＋ Reportar un problema</button></section>
        </div>
        <footer><span className="pie-marca">Alerta Urbana <span>· Guadalajara</span></span><span>Proyecto escolar · Avance de interfaz · Sin conexión a API todavía</span></footer>
      </main>
      {mostrar && <Modal><div className="titulo-panel"><h2>Nuevo reporte</h2><button className="cerrar" onClick={() => setMostrar(false)} aria-label="Cerrar">×</button></div><p>Cuéntanos qué sucede en tu zona.</p><form onSubmit={enviarReporte} noValidate><label htmlFor="nombre">Tu nombre</label><input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} /><label htmlFor="tipo">Tipo de problema</label><select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}><option>Inundación</option><option>Bache</option><option>Árbol caído</option></select><label htmlFor="lugar">Calle o colonia</label><input id="lugar" value={lugar} onChange={(e) => setLugar(e.target.value)} /><label htmlFor="comentario">Descripción</label><textarea id="comentario" rows="3" value={comentario} onChange={(e) => setComentario(e.target.value)} />{error && <p className="error" role="alert">{error}</p>}<p className="ayuda">Este avance guarda los reportes solo mientras la página está abierta.</p><button className="boton-reporte">Agregar reporte</button></form></Modal>}
    </>
  )
}
export default App
