function App() {
  const nombre = 'Fernando de Jesús Sibaja Valdés'
  const deporte = '(Boxeo, Taekwondo, Jiu-Jitsu y Muay Thai)'

  return (
    <div>
      <h3>Lista de Hobbies {nombre}</h3>
      <ol>
        <li>Bailar</li>
        <li>Escuchar Música</li>
        <li>Pasar tiempo con los amigos</li>
        <li>Ver series y Peliculas</li>
        <li>Artes Marciales Mixtas {deporte}</li>
        <li>Parkour</li>
        <li>Baloncesto</li>
        <li>Tocar guitarra</li>
        <li>Viajar</li>
        <li>Manejar</li>
      </ol>
    </div>
  )
}

export default App