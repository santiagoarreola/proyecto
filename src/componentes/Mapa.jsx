function Mapa({ cerrarMapa }) {
  return (
    <section className="panel panel-mapa" id="mapa" aria-labelledby="titulo-mapa">
      <div className="titulo-panel">
        <div><p className="subtitulo">EXPLORA TU CIUDAD</p><h2 id="titulo-mapa">Zona Metropolitana de Guadalajara</h2></div>
        <button className="cerrar" onClick={cerrarMapa} aria-label="Cerrar mapa">×</button>
      </div>
      <p className="descripcion-mapa">Mueve el mapa y usa los botones + y − para acercarte a las calles de Guadalajara y sus municipios vecinos.</p>
      <iframe
        title="Mapa interactivo de la Zona Metropolitana de Guadalajara, México"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-103.56%2C20.43%2C-103.10%2C20.88&layer=mapnik"
        className="mapa-interactivo"
        allowFullScreen
      />
      <div className="pie-mapa"><span>Mapa base · Los reportes todavía no se muestran como marcadores.</span><a href="https://www.openstreetmap.org/#map=11/20.655/-103.33" target="_blank" rel="noreferrer">Abrir mapa completo ↗</a></div>
    </section>
  )
}
export default Mapa
