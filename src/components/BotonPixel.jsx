function BotonPixel({ href, children, ...resto }) {
  return (
    <a
      href={href}
      {...resto}
      className="block py-3 text-center font-pixel text-lg
        bg-bloque border-4
        border-t-white/20 border-l-white/20 border-b-black/60 border-r-black/60
        hover:bg-pasto hover:text-cueva
        active:border-t-black/60 active:border-l-black/60 active:border-b-white/20 active:border-r-white/20
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-diamante"
    >
      {children}
    </a>
  )
}

export default BotonPixel
