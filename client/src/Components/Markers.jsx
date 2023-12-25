
const Markers = ({name}) => {
  return (
    <section className="flex gap-3 items-center">
        <div className="w-4 h-8 bg-red-600"></div>
        <h1 className="font-semibold text-red-600">{name}</h1>
    </section>
  )
}

export default Markers