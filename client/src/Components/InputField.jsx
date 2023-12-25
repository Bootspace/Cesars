
const InputField = (props) => {
  return (
    <div>
        <label htmlFor="hs-trailing-button-add-on-with-icon" className="sr-only">Label</label>
        <div className="flex rounded-lg shadow-sm">
            <input type="text" id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon" className="py-3 px-4 block w-full bg-gray-200 border-gray-200 focus:outline-none shadow-sm rounded-s-md text-sm disabled:opacity-50 disabled:pointer-events-none " placeholder={props.text} />
            <button type="button" className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-gray-200 text-black hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none">
                {props.logo}
            </button>
        </div>
    </div>
  )
}

export default InputField