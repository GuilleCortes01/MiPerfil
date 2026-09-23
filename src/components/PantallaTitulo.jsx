function PantallaTitulo() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center gap-4 p-4 overflow-hidden">
      <div className="relative">
        <h1 className="font-pixel text-6xl sm:text-8xl font-bold text-pasto text-shadow-pixel">
          GUILLE
        </h1>
        <p className="absolute -bottom-4 -right-6 -rotate-15 font-pixel text-oro whitespace-nowrap motion-safe:animate-splash">
          ¡Ahora con React!
        </p>
      </div>

      <p className="mt-6 text-lg">Frontend Developer</p>

      <p className="absolute bottom-3 left-4 text-sm text-texto/60">Portfolio v0.1</p>
      <p className="absolute bottom-3 right-4 text-sm text-texto/60">© 2026 Guille</p>
    </section>
  )
}

export default PantallaTitulo
