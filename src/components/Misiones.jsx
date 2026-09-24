import BotonPixel from './BotonPixel'
import imagenBarberia from '../assets/proyectos/barberia.jpg'
import imagenMiProfe from '../assets/proyectos/miprofe.jpg'

const misiones = [
  {
    nombre: 'Urban Barber Studio',
    tipo: 'Proyecto en dupla',
    imagen: imagenBarberia,
    descripcion:
      'Sistema de turnos para una barbería con login, reservas y panel de administración. Trabajé en el frontend y el backend: el flujo de reservas, el panel de administración, la cancelación de turnos y el contacto por WhatsApp.',
    tecnologias: ['React', 'Tailwind', 'Express', 'Prisma', 'SQLite'],
    codigo: 'https://github.com/GuilleCortes01/ProyectoBarberia',
  },
  {
    nombre: 'MiProfe',
    tipo: 'Proyecto grupal de la facultad · 3 integrantes',
    imagen: imagenMiProfe,
    descripcion:
      'Plataforma que conecta alumnos con profesores particulares en Tucumán. Desarrollé la sección de profesores, la página de inicio y los estilos globales. Coordinamos el trabajo con ramas y Pull Requests.',
    tecnologias: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    demo: 'https://miprofe00.netlify.app',
    codigo: 'https://github.com/GuilleCortes01/TP1-C9-TUP',
  },
]

function Misiones() {
  return (
    <section id="misiones" className="min-h-screen flex flex-col items-center justify-center gap-8 p-4">
      <h2 className="font-pixel text-4xl font-bold text-pasto text-shadow-pixel">Misiones</h2>

      <div className="grid w-full max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {misiones.map((mision) => (
          <article
            key={mision.nombre}
            className="flex flex-col bg-bloque border-4 border-t-white/20 border-l-white/20 border-b-black/60 border-r-black/60"
          >
            <img src={mision.imagen} alt={`Captura de ${mision.nombre}`} className="aspect-video w-full object-cover" />

            <div className="flex flex-1 flex-col gap-3 p-5">
              <p className="font-pixel text-sm text-pasto">✔ Misión completada</p>
              <div>
                <h3 className="font-pixel text-2xl font-bold">{mision.nombre}</h3>
                <p className="text-sm text-texto/60">{mision.tipo}</p>
              </div>
              <p>{mision.descripcion}</p>

              <ul className="flex flex-wrap gap-2">
                {mision.tecnologias.map((tecnologia) => (
                  <li key={tecnologia} className="bg-cueva px-2 py-1 text-xs font-semibold text-diamante">
                    {tecnologia}
                  </li>
                ))}
              </ul>

              <div className="mt-auto grid grid-flow-col auto-cols-fr gap-2 pt-2">
                {mision.demo && (
                  <BotonPixel href={mision.demo} target="_blank" rel="noopener noreferrer">
                    Ver demo
                  </BotonPixel>
                )}
                <BotonPixel href={mision.codigo} target="_blank" rel="noopener noreferrer">
                  Ver código
                </BotonPixel>
              </div>
            </div>
          </article>
        ))}

        <article className="flex flex-col border-4 border-dashed border-white/20">
          <div className="flex aspect-video items-center justify-center bg-cueva text-6xl">🔒</div>
          <div className="flex flex-col gap-3 p-5">
            <p className="font-pixel text-sm text-redstone">Misión bloqueada</p>
            <div>
              <h3 className="font-pixel text-2xl font-bold">Misión secreta</h3>
              <p className="text-sm text-texto/60">E-commerce de ropa para bebés</p>
            </div>
            <p>Proyecto privado en desarrollo. Pronto más información.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Misiones
