import Inventario from './components/Inventario'
import Misiones from './components/Misiones'
import PantallaTitulo from './components/PantallaTitulo'
import TarjetaOperador from './components/TarjetaOperador'

function App() {
  return (
    <main>
      <PantallaTitulo />
      <TarjetaOperador />
      <Misiones />
      <Inventario />
    </main>
  )
}

export default App


