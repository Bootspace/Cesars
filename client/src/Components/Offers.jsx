
const Offers = (props) => {
  return (
    <div className={`w-12 h-7 m-2 absolute z-[9999999] inset-0 flex items-center justify-center ${props.color}`}>
        <h1 className="text-white text-sm flex">-{props.amount}%</h1>
    </div>
  )
}

export default Offers