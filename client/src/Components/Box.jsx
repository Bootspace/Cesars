

const Box = (props) => {
  return (
    <div className='w-52 h-36 border border-black/50 flex flex-col justify-center items-center gap-5 btn bg-white'>
        {props.icon}
        <p>{props.name}</p>
    </div>
  )
}

export default Box

