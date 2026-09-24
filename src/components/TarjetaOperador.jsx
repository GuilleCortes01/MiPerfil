import { useState } from 'react'
import foto from '../assets/perfil-foto.jpg'
import avatar from '../assets/perfil-avatar.jpg'

const loadout = [
  { tipo: 'Principal', nombre: 'JavaScript' },
  { tipo: 'Secundaria', nombre: 'C#' },
  { tipo: 'Gadget', nombre: 'Git + GitHub' },
]

const entrenamiento = [
  {
    curso: 'Programación Web',
    lugar: 'Instituto de Formación Profesional NOA · 2025',
    completado: true,
  },
  {
    curso: 'Tecnicatura Universitaria en Programación',
    lugar: 'UTN · Facultad Regional Tucumán',
    completado: false,
  },
  {
    curso: 'Programador FullStack',
    lugar: 'RollingCode School',
    completado: false,
  },
]

function TarjetaOperador() {
  const [verAvatar, setVerAvatar] = useState(false)

  return (
    <section id="perfil" className="min-h-screen flex items-center justify-center p-4">
      <article className="w-full max-w-4xl grid md:grid-cols-[280px_1fr] bg-bloque border-4 border-t-white/20 border-l-white/20 border-b-black/60 border-r-black/60">
        <button
          type="button"
          onClick={() => setVerAvatar(!verAvatar)}
          aria-label="Cambiar entre foto y avatar"
          className="group relative aspect-3/4 md:aspect-auto cursor-pointer"
        >
          <img
            src={foto}
            alt="Foto de Guillermo Cortes"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <img
            src={avatar}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-100 ${verAvatar ? 'opacity-100' : 'opacity-0'}`}
          />
        </button>

        <div className="flex flex-col gap-6 p-6">
          <header>
            <p className="font-pixel text-sm text-diamante">OPERADOR</p>
            <h2 className="font-pixel text-5xl font-bold text-pasto text-shadow-pixel">GUILLE</h2>
            <p className="text-texto/70">Guillermo Augusto Cortes</p>
          </header>

          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="text-sm text-texto/60">Rol</dt>
              <dd className="font-semibold">Frontend Developer</dd>
            </div>
            <div>
              <dt className="text-sm text-texto/60">Base</dt>
              <dd className="font-semibold">Tucumán, Argentina</dd>
            </div>
          </dl>

          <div>
            <h3 className="mb-2 font-pixel text-oro">Loadout</h3>
            <ul className="grid grid-cols-3 gap-2">
              {loadout.map((arma) => (
                <li key={arma.tipo} className="bg-cueva p-3">
                  <p className="text-xs text-texto/60">{arma.tipo}</p>
                  <p className="font-pixel text-lg">{arma.nombre}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-pixel text-oro">Entrenamiento</h3>
            <ul className="flex flex-col gap-3">
              {entrenamiento.map((item) => (
                <li key={item.curso} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">{item.curso}</p>
                    <p className="text-sm text-texto/60">{item.lugar}</p>
                  </div>
                  <span className={`shrink-0 font-pixel text-sm ${item.completado ? 'text-pasto' : 'text-diamante'}`}>
                    {item.completado ? '✔ Completado' : '▶ En curso'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  )
}

export default TarjetaOperador
