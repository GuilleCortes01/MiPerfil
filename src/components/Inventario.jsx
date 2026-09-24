import iconoHtml from '../assets/iconos/html5.svg'
import iconoCss from '../assets/iconos/css3.svg'
import iconoJs from '../assets/iconos/javascript.svg'
import iconoReact from '../assets/iconos/react.svg'
import iconoTailwind from '../assets/iconos/tailwindcss.svg'
import iconoVite from '../assets/iconos/vitejs.svg'
import iconoGit from '../assets/iconos/git.svg'
import iconoGithub from '../assets/iconos/github.svg'
import iconoCsharp from '../assets/iconos/csharp.svg'

const habilidades = [
  {
    nombre: 'HTML',
    icono: iconoHtml,
    nivel: 'Iniciado',
    descripcion: 'Estructura de páginas con etiquetas semánticas y formularios.',
  },
  {
    nombre: 'CSS',
    icono: iconoCss,
    nivel: 'Iniciado',
    descripcion: 'Flexbox, Grid, unidades rem/em y diseño responsive.',
  },
  {
    nombre: 'JavaScript',
    icono: iconoJs,
    nivel: 'Aprendiz',
    descripcion: 'Lógica, eventos y manipulación del DOM.',
  },
  {
    nombre: 'React',
    icono: iconoReact,
    nivel: 'Aprendiz',
    descripcion: 'Componentes, props y estado. Este portfolio está hecho con React.',
  },
  {
    nombre: 'Tailwind CSS',
    icono: iconoTailwind,
    nivel: 'Aprendiz',
    descripcion: 'Estilos con clases utilitarias y un tema propio.',
  },
  {
    nombre: 'Vite',
    icono: iconoVite,
    nivel: 'Aprendiz',
    descripcion: 'Entorno de desarrollo y build de proyectos React.',
  },
  {
    nombre: 'Git',
    icono: iconoGit,
    nivel: 'Iniciado',
    descripcion: 'Commits, ramas y merges siguiendo GitHub Flow.',
  },
  {
    nombre: 'GitHub',
    icono: iconoGithub,
    nivel: 'Iniciado',
    descripcion: 'Repositorios y Pull Requests.',
  },
  {
    nombre: 'C#',
    icono: iconoCsharp,
    nivel: 'Aprendiz',
    descripcion: 'Fundamentos de programación.',
  },
]

const TOTAL_CASILLEROS = 18

const casillero =
  'flex aspect-square w-full items-center justify-center bg-cueva border-2 border-t-black/60 border-l-black/60 border-b-white/20 border-r-white/20'

function Inventario() {
  const vacios = TOTAL_CASILLEROS - habilidades.length

  return (
    <section id="inventario" className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-bloque p-4 sm:p-6 border-4 border-t-white/20 border-l-white/20 border-b-black/60 border-r-black/60">
        <h2 className="mb-4 font-pixel text-3xl font-bold text-pasto text-shadow-pixel">Inventario</h2>

        <ul className="grid grid-cols-6 gap-1 sm:grid-cols-9">
          {habilidades.map((habilidad) => (
            <li key={habilidad.nombre}>
              <button
                type="button"
                aria-label={habilidad.nombre}
                title={habilidad.nombre}
                className={`${casillero} cursor-pointer hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-diamante`}
              >
                <img src={habilidad.icono} alt="" className="h-3/5 w-3/5" />
              </button>
            </li>
          ))}
          {Array.from({ length: vacios }, (_, i) => (
            <li key={`vacio-${i}`} className={casillero} />
          ))}
        </ul>

        <p className="mt-3 text-sm text-texto/60">Los casilleros vacíos son para lo que voy a aprender.</p>
      </div>
    </section>
  )
}

export default Inventario
